import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    };

    const resetState = () => {
        setSearchInput('');
        setNumberOfGuests(1);
        setStartDate(new Date());
        setEndDate(new Date());
    };

    const search = () => {
            //router.push(`/search?searchInput=${searchInput}`)
            router.push({
                pathname: '/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(), 
                    numberOfGuests: numberOfGuests

                }
            });
    };

    return (
        <header className="sticky top-0 z-50 p-5 md:p-10 grid grid-cols-3 bg-white shadow-md">
            <div className="flex relative items-center h-10 cursor-pointer my-auto">
                <Image src={'https://links.papareact.com/qd3'} layout='fill' objectFit="contain" objectPosition={'left'} onClick={() => router.push('/')}></Image>
            </div>
            <div className="flex justify-between md:border-2 rounded-full py-2 pl-5 pr-2 md:shadow-sm">
                <input type='text' value={searchInput} placeholder={placeholder || 'Start your search...'} className="transparent outline-none flex-grow flex-shrink min-w-0 text-gray-500 placeholder-gray-300" onChange={(e) => setSearchInput(e.target.value)}></input>
                <SearchIcon className="w-8 h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer hidden md:inline-flex flex-shrink-0" onClick={search}></SearchIcon>
            </div>
            <div className="flex relative items-center space-x-4 justify-end text-gray-500">
                <p className="content-center hidden lg:inline-flex">Become a host</p>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <UserCircleIcon className="h-8"></UserCircleIcon>
                    <GlobeAltIcon className="h-8"></GlobeAltIcon>
                    <MenuIcon className='h-8'></MenuIcon>
                </div>
            </div>
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    ></DateRangePicker>
                    <div className='flex items-center'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>
                        <UsersIcon className="h-5"></UsersIcon>
                        <input value={numberOfGuests} type='number' className="w-12 pl-2 txt-lg outline-none text-red-400" min='1' onChange={(e) => setNumberOfGuests(e.target.value)}></input>
                    </div>
                    <div className="flex flew-row">
                        <button className="flex-grow text-gray-400" onClick={resetState}>
                            Cancel
                        </button>
                        <button className="flex-grow text-red-400" onClick={search}>
                            Search
                        </button>
                    </div>


                </div>
            )}

        </header>
    )
}

export default Header