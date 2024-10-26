"use client";

import { ShowMoreProps } from '@/types';
import CustomButton from './CustomButton';
import { useState } from 'react';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleNavigation = () => {
        setIsLoading(true);
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    };

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext ? (
                <CustomButton title={isLoading ? 'Loading...' : 'Show More'} btnType='button' containerStyles='bg-primary-blue rounded-full text-white' handleClick={handleNavigation} isDisabled={isLoading}></CustomButton>
            ) : null}
            <div aria-live='polite' className='sr-only'>{isLoading ? 'Loading more items...' : ''}</div>
        </div>
    );
};

export default ShowMore;
