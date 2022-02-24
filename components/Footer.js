import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100'>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>About</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Support</h5>
                    <p>Help Centre</p>
                    <p>Safety information</p>
                    <p>Cancellation options</p>
                    <p>Our COVID-19 Response</p>
                    <p>Supporting people with disabilities</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Community</h5>
                    <p>Airbnb.org: disaster relief housings</p>
                    <p>Support Afghan refugees</p>
                    <p>Combating discrimination</p>
                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Hosting</h5>
                    <p>Try hosting</p>
                    <p>AirCover: protection for Hosts</p>
                    <p>Visit our community forum</p>
                    <p>How to host responsibly</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer