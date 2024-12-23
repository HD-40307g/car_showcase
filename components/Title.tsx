"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';
import { useCallback } from 'react';

const Title = () => {
    const handleScroll = useCallback(() => {
        const nextSection = document.getElementById("discover");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn("Element with ID 'discover' not found for scrolling.");
        }
    }, []);

        return (
        <header className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Find, book, or rent a car - quick and easy!</h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />
            </div>
            <div className="hero__image-container">
                <div className='hero__image'>
                    <Image src="/hero.png" alt="car" fill className="object-contain"/>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </header>
    );
};

export default Title;
