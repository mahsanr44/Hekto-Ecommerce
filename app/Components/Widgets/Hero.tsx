import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import HeroImg from "@/Assets/hero.png"
import Image from 'next/image'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='bg-[#F2F0FF] '>


                    <div className=' lg:p-10 p-5 md:flex lg:space-x-36 md:space-x-14  justify-center items-center lg:mx-20 pt-20 '>
                        <div className='space-y-3'>
                            <p className='text-[#FB2E86] font-sans font-bold'>Best Furniture For Your Castle....</p>
                            <h1 className='font-extrabold text-4xl font-serif'>New Furniture Collection Trends in 2023</h1>
                            <p className='text-[#8A8FB9] font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</p>
                            <button className='bg-[#FB2E86] p-2 text-white rounded-sm font-sans px-4'>Shop Now</button>
                        </div>
                        <div className='bg-[#ECD2FA] rounded-full p-10 mt-5'>
                            <Image src={HeroImg} alt={'Hero '} width={450} height={450} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}

export default Hero