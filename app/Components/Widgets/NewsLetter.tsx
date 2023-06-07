import React from 'react'
import BgImg from "@/Assets/newsletter.png"
import BrandImg from "@/Assets/brands.png"
import Image from 'next/image'
import { Wrapper } from '../Shared/Wrapper'
const NewsLetter = () => {
    return (
        <Wrapper>
            <div className='flex flex-col justify-center items-center space-y-12 mt-20'>


                <div className='relative'>
                    <Image src={BgImg} alt='Background' />
                    <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col  mr-48'>
                        <h2 className='text-2xl text-[#30207a] font-bold font-serif text-center'>Get Leatest Update By Subscribe our Newslater</h2>
                        <button className='bg-[#FB2E86] p-2  text-white rounded-sm font-sans px-2 mt-4'>Subscribe Now</button>
                    </div>
                </div>
                <div>
                    <Image src={BrandImg} alt='Brands' />
                </div>
            </div>
        </Wrapper>
    )
}

export default NewsLetter
