import React from 'react'
import Map from '../components/Map'
function test({searchResults}) {
    return (

        <section className='hidden xl:inline-flex w-[600px] h-[600px]'>
            <Map searchResults={searchResults}></Map>
        </section>
    )
}

export default test


export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(res => res.json());

    return {
        props: {
            searchResults: searchResults
        }
    }
}