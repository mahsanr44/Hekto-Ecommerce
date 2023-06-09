"use client"
import { Wrapper } from '@/Components/Shared/Wrapper'
import Image, { StaticImageData } from 'next/image'
import React, { FC, useState } from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Menu } from './Menu'
import toast, { Toaster } from 'react-hot-toast'
import Heading from '@/Components/Shared/Heading'

interface CartProps {
    image: StaticImageData;
}

const ProductDetails: FC<CartProps> = () => {

    const [selectedImage, setSelectedImage] = useState<StaticImageData>(Menu[0].image);

    const initialValue = 0
    const [quantity, setQuantity] = useState(initialValue)

    const incremet = () => {
        setQuantity(a => a + 1)
    }
    const decrement = () => {
        quantity === 0 ? '' : setQuantity(a => a - 1)

    }

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
    };

    const notify = () => toast.success('Product Added to Cart');

    return (
        <Wrapper>
            <Heading txt={'Product Details'} />
            <div className='md:flex lg:mx-16 mx-4 items-center mt-10'>
                <div className='flex gap-3 flex-row md:block'>
                    {
                        Menu.map((item) => {
                            return (
                                <div key={item.id} onClick={() => handleImageClick(item.image)}>
                                    <Image src={item.image} alt='First' width={140} height={140} className='m-1 my-3 rounded-sm bg-gray-100 ' />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            width={395}
                            height={395}
                            alt='Selected Image'
                            className='m-2 my-3  h-[315px] lg:h-[452px] w-[450px] rounded bg-gray-100'
                        />
                    )}
                </div>
                <div className='flex flex-col ml-12 lg:ml-24'>
                    <h1 className='font-bold font-sans text-3xl text-[#1A0B5B]'>Pakistani Sofa</h1>
                    <p className='uppercase text-gray-500 my-2'>Sofa</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <div className='flex space-x-4 mt-8 md:mt-16'>
                        <button
                            onClick={decrement}
                            className=' rounded-full border bg-gray-200 border-black text-lg px-3'> -</button>
                        <span className='font-semibold'>{quantity}</span>
                        <button
                            onClick={incremet}
                            className=' rounded-full border border-black bg-gray-200 text-lg px-2'>+</button>
                    </div>
                    <div className='flex mt-5 items-center '>
                        <Button
                            onClick={notify}
                            className='bg-[#FB2E86] hover:bg-[#FB2E86]' >
                            <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                        <span className=' ml-10 text-xl font-bold'>$100</span>
                    </div>
                </div>
            </div>
            <div className='mx-10 mt-24 md:mt-10'>
                <div className='mt-10 space-y-2'>
                    <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>Product Description:</h2>
                    <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. </p>
                </div>
                <div className='mt-10 space-y-2'>
                    <h2 className='text-2xl font-bold font-serif text-[#1A0B5B]'>More Details:</h2>
                    <p className='text-justify font-sans font-semibold text-[#8A8FB9]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. The new aliquam of the state of dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
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
