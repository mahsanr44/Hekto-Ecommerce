import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import DiscountImg from "@/Assets/discount.png"
import Image from 'next/image'

const Discount = () => {
  return (
    <Wrapper>
    <div>
       <h1 className='text-2xl mt-32 text-[#30207a] font-bold font-serif flex justify-center items-center'>
                    Discount Items
                </h1>
                <div className=' lg:p-10 p-5 md:flex lg:space-x-24 md:space-x-14  justify-center items-center lg:mx-12  '>
                        <div className='space-y-4'>
                            <h1 className='font-extrabold text-4xl font-serif'> Discount Of 39% on All Products</h1>
                            <p className='text-[#FB2E86] font-sans font-bold underline'>Eams Sofa Compact </p>
                            <p className='text-[#8A8FB9] font-normal mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                            <ul className='grid grid-cols-2 text-[#8A8FB9] text-sm mt-2 space-y-2 list-disc'>
                              <li>Material expose like metals</li>
                              <li>Clear lines and geomatric figures</li>
                              <li>Simple neutral colours</li>
                              <li>Material expose like metals</li>
                            </ul>
                            <div>

                            <button className='bg-[#FB2E86] p-2  text-white rounded-sm font-sans px-4'>Shop Now</button>
                            </div>
                        </div>
                        <div>
                        <div className='bg-[#FCECF1] rounded-full mt-5 '>
                            <Image className='py-5'  src={DiscountImg} alt={'Hero '} width={500} height={500} />
                        </div>
                        </div>
                    </div>
    </div>
    </Wrapper>
  )
}

export default Discount
 