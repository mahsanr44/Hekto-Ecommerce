"use client"
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { Button } from '../../../components/ui/button'
import { Image as IImage } from "sanity"
import { urlForImage } from '../../../sanity/lib/image'
import { useRouter } from 'next/navigation'

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

const SingleProduct: FC<IProducts> = ({ title, price, image, _id, category, description, care }) => {


    const [selectedImage, setSelectedImage] = useState<IImage>(image[0]);

    const handleImageClick = (image: IImage) => {
        setSelectedImage(image);
    };
    const initialValue = 0
    const [quantity, setQuantity] = useState(initialValue)

    const increment = () => {
        setQuantity(a => a + 1)
    }
    const decrement = () => {
        quantity === 0 ? '' : setQuantity(a => a - 1)

    }

    const { refresh } = useRouter();

    const handleAddtoCart = async () => {
        if (quantity <= 0) {
            toast.error('Please Select Quantity');
            return;
        }
        const res = await fetch("/api/cart",
            {
                method: "POST",
                body: JSON.stringify({
                    product_id: _id,
                    name: title,
                    image: urlForImage(image[0]).url(),
                    category: category.name,
                    quantity: quantity,
                    price: price,
                    total: price * quantity
                })
            })
        const result = await res.json()
        toast.success('Product Added to Cart');
        refresh();
    }

    return (
        <div>
            <div>
                <div className='md:flex lg:mx-16 mx-4 items-center mt-10'>
                    <div className='flex gap-3 flex-row md:block'>
                        {
                            image.map((img) => {
                                return (
                                    <div key={_id} onClick={() => handleImageClick(img)}>
                                        <Image src={urlForImage(img).url()} alt={title} width={140} height={140} className='m-1 my-3 rounded-sm bg-gray-100 ' />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Image
                            src={urlForImage(selectedImage).url()}
                            width={395}
                            height={395}
                            alt='Selected Image'
                            className='m-2 my-3  h-[315px] lg:h-[452px] w-[450px] rounded bg-gray-100'
                        />
                    </div>
                    <div className='flex flex-col ml-12 lg:ml-24'>
                        <h1 className='font-bold font-sans text-3xl text-[#1A0B5B]'>{title}</h1>
                        <p className='uppercase text-gray-400 my-2 font-bold'>{category.name}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing product.</p>
                        <div className='flex space-x-4 mt-8 md:mt-16'>
                            <button
                                onClick={decrement}
                                className=' rounded-full border bg-gray-200 border-black text-lg px-3'>
                                - </button>
                            <span className='font-semibold'>{quantity}</span>
                            <button
                                onClick={increment}
                                className=' rounded-full border border-black bg-gray-200 text-lg px-2'>
                                +
                            </button>
                        </div>
                        <div className='flex mt-5 items-center '>
                            <Button
                                onClick={handleAddtoCart}
                                className='bg-[#FB2E86] hover:bg-[#FB2E86]' >
                                <ShoppingCartIcon
                                    className="mr-2 h-4 w-4" /> Add to Cart
                            </Button>
                            <span className=' ml-10 text-xl font-bold'>${price * quantity}</span>
                        </div>
                    </div>
                </div>
                <div className='mx-10 mt-24 md:mt-10'>
                    <div className='mt-10 space-y-2'>
                        <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>Product Description:</h2>
                        <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>{description}</p>
                    </div>
                    <div className='mt-10 space-y-2'>
                        <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>More Details:</h2>
                        <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>{care}</p>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={4}
                containerClassName="absolute top-0"
                containerStyle={{}}
                toastOptions={{
                    className: 'slide-toast',
                    duration: 2000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            />
        </div>

    )
}

export default SingleProduct
