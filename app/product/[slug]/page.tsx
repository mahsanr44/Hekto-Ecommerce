"use client"
import { Wrapper } from '@/Components/Shared/Wrapper'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { Menu } from '../Menu'
import { Button } from '../../../components/ui/button'
import { Image as IImage } from "sanity"
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'

interface IProducts {
    slug: string
    title: string,
    price: number,
    discount: number,
    image: IImage[],
    description: string,
    care: string,
    category: {
        name: string
    },
    _id: string,

}

const getFeaturedProducts = async () => {
    const res = await client.fetch(`*[_type=="products"]{
        _id,
        title,
        price,
        discount,
        image, 
        description,
        care,
        category->{
            name
        },
        "slug":slug.current
    }`)

    return res
}

const getProductDetails = async (slug: string) => {
    const featuredData: IProducts[] = await getFeaturedProducts();

    return featuredData.filter((product) => product.slug === slug)
}

const ProductDetails = async ({ myProps, params }: { myProps: any; params: { slug: string } }) => {

    const result = await getProductDetails(params.slug);


    const notify = () => toast.success('Product Added to Cart');

    return (
        <Wrapper>
            <div className='bg-[#E7E4F8] py-6  mt-14 flex flex-col justify-center items-center'>
                <h1 className='text-3xl  text-[#1A0B5B] font-bold font-serif capitalize'>
                    Product Information
                </h1>
                <p className='text-[#FB2E86] font-sans font-semibold mt-5'>Best Furniture For Your Castle...</p>
            </div>            <div>
                {
                    result.length > 0 ? result.map((item) => {

                        return (
                            <div>
                                <div className='md:flex lg:mx-16 mx-4 items-center mt-10'>
                                    <div className='flex gap-3 flex-row md:block'>

                                        <div key={item._id} >

                                            {/* <Image src={urlForImage(item.image[i]).url()} alt='Product' width={140} height={140} className='m-1 my-3 rounded-sm bg-gray-100 ' /> */}

                                        </div>

                                    </div>
                                    <div>
                                        <Image
                                            src={urlForImage(item.image[0]).url()}
                                            width={395}
                                            height={395}
                                            alt='Selected Image'
                                            className='m-2 my-3  h-[315px] lg:h-[452px] w-[450px] rounded bg-gray-100'
                                        />
                                    </div>
                                    <div className='flex flex-col ml-12 lg:ml-24'>
                                        <h1 className='font-bold font-sans text-3xl text-[#1A0B5B]'>{item.title}</h1>
                                        <p className='uppercase text-gray-400 my-2 font-bold'>{item.category.name}</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                                        <div className='flex space-x-4 mt-8 md:mt-16'>
                                            <button
                                                // onClick={Incfun}
                                                className=' rounded-full border bg-gray-200 border-black text-lg px-3'> -</button>
                                            <span className='font-semibold'>{1}</span>
                                            <button
                                                // onClick={Decfun}
                                                className=' rounded-full border border-black bg-gray-200 text-lg px-2'>+</button>
                                        </div>
                                        <div className='flex mt-5 items-center '>
                                            <Button
                                                onClick={notify}
                                                className='bg-[#FB2E86] hover:bg-[#FB2E86]' >
                                                <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
                                            </Button>
                                            <span className=' ml-10 text-xl font-bold'>${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-10 mt-24 md:mt-10'>
                                    <div className='mt-10 space-y-2'>
                                        <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>Product Description:</h2>
                                        <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>{item.description}</p>
                                    </div>
                                    <div className='mt-10 space-y-2'>
                                        <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>More Details:</h2>
                                        <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>{item.care}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    }) : <p className='flex justify-center items-center py-12'> No Product Found</p>
                }
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={4}
                containerClassName="absolute top-0"
                containerStyle={{}}
                toastOptions={{
                    className: 'slide-toast',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            />

        </Wrapper>
    )
}

export default ProductDetails
