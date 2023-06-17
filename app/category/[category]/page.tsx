import React from 'react'
import { Image as IImage } from "sanity"
import { Wrapper } from '@/Components/Shared/Wrapper'
import ProductCard from '@/Components/Shared/ProductCard'
import Heading from '@/Components/Shared/Heading'
import { client } from '../../../sanity/lib/client'

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
    slug: string

}


const getFeaturedProducts = async () => {
    const res = await client.fetch(`*[_type=="products"]{
        _id,
        title,
        price,
        discount,
        image, 
        description,
        category->{
            name
        },
        care,
        "slug":slug.current
    }`)
    return res
}

const getProductbyCategory = async (category: string) => {
    const featuredData: IProducts[] = await getFeaturedProducts();

    return featuredData.filter((product) => product.category.name === category)
}

const AllProducts = async ({ params }: { params: { category: string } }) => {

    const result = await getProductbyCategory(params.category);

    return (
        <section>
            <Wrapper>
                <Heading txt={result[0].category.name} />
                <div className='flex flex-wrap   mt-8 gap-10  mx-5 lg:mx-28 justify-around items-center text-center '>
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

export default AllProducts
