import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import HeroImg from "@/Assets/hero.png"
import Image from 'next/image'
import { Lato as Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    // this will be the css variable
    variable: '--font-lato',
    weight: "100"
});

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='bg-secondary '>


                    <div className=' lg:p-10 p-5 md:flex lg:space-x-36 md:space-x-14  justify-center items-center lg:mx-20 pt-20 '>
                        <div className='space-y-3'>
                            <p className='text-primary font-sans font-bold'>Best Furniture For Your Castle....</p>
                            <h1 className='font-extrabold font-poppins text-4xl'>New Furniture Collection Trends in 2020</h1>
                            <p className='text-[#8A8FB9] font-normal font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</p>
                            <button className='bg-primary p-2 text-white rounded-sm font-poppins px-4'>Shop Now</button>
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
