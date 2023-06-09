import React from 'react'
import { Image as IImage } from "sanity"
import { Wrapper } from '@/Components/Shared/Wrapper'
import { client } from '../../sanity/lib/client'
import ProductCard from '@/Components/Shared/ProductCard'
import Heading from '@/Components/Shared/Heading'

interface IProducts {
    title: string,
    price: number,
    discount: number,
    image: IImage,
    description: string,
    care: string,
    _id: string,
    category: {
        name: string
    }
}

const getFeaturedProducts = async () => {
    const res = await client.fetch(`*[_type=="products" && category->name=="sofa"]{
        title,
        price,
        discount,
        image, 
        description,
        care,
        category->{
            name
        }
    }`)
    return res
}

const Sofas = async () => {

    const featuredData: IProducts[] = await getFeaturedProducts();

    return (
        <section>
            <Wrapper>
                <Heading txt={'All Sofas'} />
                <div className='flex flex-wrap  mt-8 gap-10  mx-5 lg:mx-28 justify-around items-center text-center '>
                    {
                        featuredData.map((item) => {
                            return (
                                <ProductCard
                                key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    price={item.price}
                                    discount={item.discount}
                                    image={item.image}
                                />
                            )
                        })
                    }
                </div>
            </Wrapper>
        </section>
    )
}

export default Sofas
