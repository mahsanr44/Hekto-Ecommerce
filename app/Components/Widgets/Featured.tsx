import Image from 'next/image'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import { Image as IImage } from "sanity"
import { urlForImage } from '../../../sanity/lib/image'
import { Wrapper } from '../Shared/Wrapper'
import ProductCard from '../Shared/ProductCard'

interface IProducts {
    title: string,
    price: number,
    discount: number,
    image: IImage[],
    description: string,
    care: string,
    _id: string,
    category: {
        name: string
    },
    slug: string,
}

const getFeaturedProducts = async () => {
    const res = await client.fetch(`*[_type=="products" && category->name=="featured"]{
        _id,
        title,
        price,
        discount,
        category->{
            name
        },
        image, 
        description,
        care,
        "slug":slug.current
    }`)

    return res
}

const getProductbyCategory = async () => {
    const featuredData: IProducts[] = await getFeaturedProducts();

    return featuredData
}

const Featured = async () => {

    const result = await getProductbyCategory();

    return (
        <section>
            <Wrapper>
                <div>
                    <h1 className='text-2xl mt-20 text-[#30207a] font-bold font-serif flex justify-center items-center'>
                        Featured Products
                    </h1>
                </div>
                <div className='flex flex-wrap  mt-8 gap-10 md:mx-20  lg:mx-32 justify-around items-center text-center '>
                    {
                        result.length > 0 ? result.map((item) => {
                            return (

                                <ProductCard
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    price={item.price}
                                    discount={item.discount}
                                    image={item.image} slug={item.slug} />

                            )
                        }) : <p>No Product Found</p>
                    }

                </div>
            </Wrapper>
        </section>
    )
}

export default Featured
