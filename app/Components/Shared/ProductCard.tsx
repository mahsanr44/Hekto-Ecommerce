import React, { FC } from 'react'
import Image from 'next/image'
import { Image as IImage } from "sanity"
import { urlForImage } from './../../../sanity/lib/image'
import Link from 'next/link'

interface IProducts {
    title: string,
    price: number,
    discount: number,
    image: IImage[],
    _id: string,
    slug:string,
    
}
const ProductCard:FC<IProducts> = ({title,price,discount,image,_id,slug}) => {
  return (
    <Link href={`/product/${slug}`}>
    <div key={_id} className='  rounded-md my-2 max-w-sm hover:scale-110 shadow-md border duration-700 cursor-pointer '>
    <div className='p-2'>
        <Image src={urlForImage(image[0]).url()} alt='Hekto Chair' height={150} width={150} />
    </div>
    <div className=' p-2  bg-gray-100 rounded-b-md '>
        <h3 className='text-[#FB2E86] font-semibold '>{title}</h3>
        <div className='items-center justify-center flex'>
            <span className=' font-semibold text-[#1A0B5B] mt-1'>${discount}</span>
        </div>
        <div className='flex justify-end'>
            <span className='text-red-500 line-through text-sm font-semibold'>${price}</span>
        </div>
    </div>
</div>
</Link>
  )
}

export default ProductCard
