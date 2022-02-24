import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { format } from 'date-fns'
import InfoCard from '../../components/InfoCard'
import Map from '../../components/Map'
import Image from 'next/image'
import { MapboxMap } from 'react-map-gl'

function Search({ searchResults }) {
    const router = useRouter();

    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={location}></Header>


            <main className='flex'>
                <section className='flex pt-14 px-6 flex-col'>
                    <p className='text-xs'>300+ stays - {range} - for {numberOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex space-x-4 items-center text-gray-800 whitespace-nowrap mb-6'>
                        <p className='button-1'>Cancellation Fexibility</p>
                        <p className='button-1'> Type of Place</p>
                        <p className='button-1'>Price</p>
                        <p className='button-1'>Rooms and Beds</p>
                        <p className='button-1'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults?.map(result => (
                            <InfoCard key={result.title}
                                img={result.img}
                                location={result.location}
                                title={result.title}
                                description={result.description}
                                star={result.star}
                                price={result.price}
                                total={result.total}
                            ></InfoCard>
                        ))}

                    </div>
                </section>


                <section className='hidden xl:inline-flex xl:min-w-[600px] max-h-[2000px] flex-grow'>

                    {/* Map is bugged and grow downwards to infinity on resize if no max-h */}
                    <Map searchResults={searchResults}></Map>

                    {/* <Image src={searchResults[0].img} layout='fill'></Image>  TEST: Image does not grow to infinity*/}
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(res => res.json());

    return {
        props: {
            searchResults: searchResults
        }
    }
}