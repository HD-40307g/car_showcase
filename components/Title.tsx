import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';

const Title = () => {
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero_title'>Find, book, or rent a car - quickly and easily!</h1>
                <p className='hero_subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton 
                    title="Explore Cars" 
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className='hero__image'>
                    <Image src="/hero.png" alt="car" fill className="object-contain"/>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    )
}

export default Title