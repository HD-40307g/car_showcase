"use client";

import  { Fragment } from 'react'
import { CarProps } from '@/types';
import Image from 'next/image';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
};

const imaginApiKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY;
const CarDetailsImage = ({ car, angle }: { car: CarProps; angle: string }) => (
    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        {imaginApiKey ? (
            <Image src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${car.make}&modelFamily=${car.model.split(" ")[0]}&zoomType=fullscreen&zoomLevel=30&modelYear=${car.year}&angle=${angle}`} alt="car model angle" fill priority className="object-contain" />
            ) : (
            <p>Image not available</p>
        )}
    </div>
);


const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <TransitionChild as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black bg-opacity-25'/>
                    </TransitionChild>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <TransitionChild as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-300' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                                <DialogPanel className='car-details__dialog-panel'>
                                    <button type='button' className='car-details__close-btn' onClick={closeModal}>
                                        <Image src='/close.svg' alt='close' width={20} height={20} className='object-contain'/>
                                    </button>
                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className='car-details__main-image'>
                                            <Image src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${car.make}&modelFamily=${car.model.split(" ")[0]}&zoomType=fullscreen&modelYear=${car.year}`} alt='car model' fill priority className='object-contain' />
                                        </div>
                                        <div className='flex gap-3'>
                                            <CarDetailsImage car={car} angle="29" />
                                            <CarDetailsImage car={car} angle="33" />
                                            <CarDetailsImage car={car} angle="13" />
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>
                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                    <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                                                    <p className='text-black-100 font-semibold'>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    ) 
}

export default CarDetails;
