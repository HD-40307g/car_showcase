"use client"

import SearchManufacturer from "./SearchManufacturer"
import { useState } from 'react'
import Image from 'next/image';
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain' />
    </button>
);

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(searchManufacturer.trim() === '' && searchModel.trim() === '') {
            return alert('Please fill in the search bar')
        }

        setModel(searchModel);
        setManufacturer(searchManufacturer);
    };

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer}/>
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image src='/public/model-icon.png' width={25} height={25} className='object-contain' alt='car model' />
                <input type='text' name='model' value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder='Arteon' className='searchbar__input'/>
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar;
