import { Wrapper } from '@/Components/Shared/Wrapper'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Image as IImage } from "sanity"
import { client } from '../../../sanity/lib/client'
import SingleProduct from './SingleProduct'

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

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
    const result = await getProductDetails(params.slug);

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
                            <SingleProduct
                                key={item._id}
                                _id={item._id}
                                title={item.title}
                                price={item.price}
                                discount={item.discount}
                                image={item.image}
                                slug={item.slug}
                                description={item.description}
                                care={item.care}
                                category={{ name: item.category.name }}
                            />
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
