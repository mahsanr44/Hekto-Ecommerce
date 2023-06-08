import { Wrapper } from '@/Components/Shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import HeroImg from "./../Assets/hero.png"
import DisImg from "./../Assets/discount.png"
import { ShoppingCart } from 'lucide-react'
const page = () => {
  return (
    <Wrapper>
            
            <div className='bg-[#E7E4F8] py-3  mt-2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl  text-[#1A0B5B] font-bold font-serif '>
                    My Shopping Cart
                </h1>
            </div>
<div className='flex mx-24 items-center'>
    <div>
        <Image src={HeroImg} alt='First'  width={130} height={130} className='m-1 my-3 rounded-sm bg-gray-200 '/>
        <Image src={DisImg} alt='First' width={130} height={130} className='m-1 my-3 rounded-sm bg-gray-200 '/>
        <Image src={HeroImg} alt='First' width={130} height={130} className='m-1 my-3 rounded-sm bg-gray-200 '/>
    </div>
    <div>
    <Image src={HeroImg} alt='First' width={395} height={395} className='m-1 my-3 rounded-sm bg-gray-200 '/>

    </div>
    <div>
        <h1>Pakistani Sofa</h1>
        <p>Sofa</p>
        <span>$100</span>
        <ShoppingCart/>
    </div>
</div>
    
    </Wrapper>
  )
}

export default page
