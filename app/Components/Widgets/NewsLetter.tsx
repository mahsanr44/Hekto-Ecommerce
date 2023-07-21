"use client"
import React from 'react'
import BgImg from "@/Assets/newsletter.png"
import BrandImg from "@/Assets/brands.png"
import Image from 'next/image'
import { Wrapper } from '../Shared/Wrapper'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully Subscribed');

const NewsLetter = () => {
    return (
        <Wrapper>
            <div className='flex flex-col justify-center items-center space-y-12 mt-20'>
                <div className='relative'>
                    <Image src={BgImg} alt='Background' />
                    <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col  md:mr-48'>
                        <h2 className='lg:text-2xl text-[#30207a] text-xs md:text-sm  font-bold font-serif text-center'>Get Leatest Update By Subscribe Our Newslater</h2>
                        <button
                            onClick={notify}
                            className='bg-[#FB2E86] md:p-2   text-white rounded-sm text-xs md:text-base  md:font-sans px-1 py-1 md:px-2 mt-0.5 md:mt-4'>
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className='cursor-pointer md:hover:scale-105 hover:shadow-sm mt-10 duration-1000'>
                    <Image src={BrandImg} alt='Brands' />
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={4}
                containerClassName="absolute top-0"
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: 'slide-toast',
                    duration: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            />
        </Wrapper>
    )
}
export default NewsLetter
