import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import DiscountImg from "@/Assets/discount.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Shared/Button'

const Discount = () => {
  return (
    <Wrapper>
      <div>
        <h1 className='text-2xl mt-32 text-[#30207a] font-bold font-serif flex justify-center items-center'>
          Discount Items
        </h1>
        <div className=' lg:p-10 p-5 md:flex lg:space-x-24 md:space-x-14  justify-center items-center lg:mx-20  '>
          <div className='space-y-4'>
            <h1 className='font-extrabold text-4xl font-serif'> Discount on All Products</h1>
            <p className='text-[#FB2E86] font-sans font-bold underline'>Eams Sofa Compact </p>
            <p className='text-[#8A8FB9] font-normal mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <ul className='grid grid-cols-2 text-[#8A8FB9] text-sm mt-2 space-y-2 '>
              <div className='flex items-center '>
                <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                <li >Material expose like metals</li>
              </div>
              <div className='flex items-center '>
                <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                <li>Clear lines and geomatric figures</li>
              </div>
              <div className='flex items-center '>
                <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                <li>Simple neutral colours</li>
              </div>
              <div className='flex items-center '>
                <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                <li>Material expose like metals</li>
              </div>
            </ul>
            <div className='max-w-fit'>
              <Link href={"/AllProducts"}>
                <Button txt={'Shop Now'} />
              </Link>
            </div>
          </div>
          <div>
            <div className='bg-[#FCECF1] rounded-full mt-5 '>
              <Image className='py-5' src={DiscountImg} alt={'Hero '} width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Discount
