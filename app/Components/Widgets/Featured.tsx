import Image from 'next/image'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import { Image as IImage } from "sanity"
import { urlForImage } from '../../../sanity/lib/image'
import { Wrapper } from '../Shared/Wrapper'

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
    const res = await client.fetch(`*[_type=="products" && category->name=="featured"]{
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

const Featured = async () => {

    const featuredData: IProducts[] = await getFeaturedProducts();


    return (
        <section>
            <Wrapper>


                <div>

                    <h1 className='text-2xl mt-20 text-[#30207a] font-bold font-serif flex justify-center items-center'>
                        Featured Products
                    </h1>
                </div>
                <div className='flex flex-wrap  mt-8 gap-10  mx-32 justify-around items-center text-center '>
                    {
                        featuredData.map((item) => {
                            return (
                                <div key={item._id} className='  rounded-md my-2 max-w-sm hover:scale-110 shadow-md border duration-700 cursor-pointer '>
                                    <div className='p-2 '>
                                        <Image src={urlForImage(item.image).url()} alt='Hekto Chair' height={150} width={150} />
                                    </div>
                                    <div className=' p-2 bg-gray-100 rounded-b-md'>
                                        <h3 className='text-[#FB2E86] font-semibold '>{item.title}</h3>
                                        <div className='items-center justify-center flex'>
                                            <span className=' font-semibold text-[#1A0B5B] mt-1'>${item.discount}</span>
                                        </div>
                                        <div className='flex justify-end'>

                                            <span className='text-red-500 line-through text-sm font-semibold'>${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }




                </div>
            </Wrapper>
        </section>
    )
}

export default Featured
