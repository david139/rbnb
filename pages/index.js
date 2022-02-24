import Head from 'next/head'
import Image from 'next/image';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, liveNearbyData }) {

  // const [exploreData, setExploreData] = useState([]);
  // useEffect(async () => {
  //   const asd = await fetch('/api/hello')
  //     .then(res => res.json())
  //     .catch(e => console.log(e))

  //     setExploreData(asd);
  // }
  // );

  return (
    <div>
      <Head>
        <title>AirBNB</title>
        <meta name="description" content="https://www.youtube.com/watch?v=BbilqOBOfg8" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <main className='max-w-7xl mx-auto sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.map(item => (
              <SmallCard item={item} key={item.img}></SmallCard>
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-3 flex-row overflow-x-scroll p-5 -m-5 scrollbar-hide'>
            {liveNearbyData?.map((item) =>
            (
              <MediumCard key={item.title} item={item}></MediumCard>
            ))}
          </div>
        </section> 
        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Whishlists curated by Airbnb' buttonText='Get Inspired'></LargeCard>
      </main>
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json());

  const liveNearbyData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json());


  return {
    props: {
      exploreData: exploreData,
      liveNearbyData: liveNearbyData
    }
  }

}


