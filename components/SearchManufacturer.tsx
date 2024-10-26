"use client"

import { useState, Fragment } from 'react';
import { Combobox, ComboboxButton, Transition, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ selected, setSelected }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
    ))

    return (
    <div className='search-manufacturer'>
        <label htmlFor="manufacturer" className="sr-only">Select Manufacturer </label>
        <Combobox value={selected} onChange={setSelected}>
            <div className='relative w-full'>
                <ComboboxButton className='absolute top-15px'>
                    <Image src="/car-logo-svg" width={20} height={20} className='ml-4' alt='Car Logo' />
                </ComboboxButton>
                <ComboboxInput className='search-manufacturer__input' placeholder='Volkswagen...' displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} />
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
                    <ComboboxOptions className='search-manufacturer__options' static>{filteredManufacturers.length === 0 && query !== "" ? (
                        <ComboboxOption value={query} className='search-manufacturer__option'>Create "{query}"</ComboboxOption>) : (filteredManufacturers.map((item) => (
                        <ComboboxOption key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}>
                            {({ selected, active }) => (
                                <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                    {item}
                                </span>
                                {selected ? (
                                    <span className={`absolute insert-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                    </span>
                                ) : null} 
                                </>
                            )}
                        </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
    );
};

export default SearchManufacturer;
