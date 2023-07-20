import { Wrapper } from '@/Components/Shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table"
import { Toaster } from 'react-hot-toast'
import Heading from '@/Components/Shared/Heading'
import { CartTypes } from '../../sanity/lib/drizzle'
import { cookies } from 'next/headers'
import StripeCheckout from '@/cart/StripeCheckout'
import DeleteSingleCart from './DeleteSingleCart'


export const getData = async () => {

    try {

        const res = await fetch('http://127.0.0.1:3000/api/cart', {
            method: 'GET',
            cache: "no-store",
            headers: { 'Content-Type': 'application/json' }
        })
        if (!res.ok) {
            throw new Error(`Error fetching data`)
        }
        const cartData = await res.json();

        return cartData

    } catch (error) {
        console.log(error)
    }
}


const Cart = async () => {
    const user_id = cookies().get("user_id")?.value as string;
    const res: { data: CartTypes[] } = await getData();
    const uid = res.data.find((uid) => uid.user_id === user_id)

    let totalQuantity = 0;
    let totalPrice = 0;
    return (
        <Wrapper>
            <Heading txt={'Shopping Cart'} />
            <div className='flex flex-col lg:flex-row justify-around mt-10'>
                <div>
                    <Table >
                        <TableHeader >
                            <TableRow className='bg-[#E7E4F8] '>
                                <TableHead className='w-fit px-8' ><h4 className='font-bold text-[#30207a] text-lg'>Product Name</h4></TableHead>
                                <TableHead className='text-center px-8'><h4 className='font-bold text-[#30207a] text-lg'>Qunatity</h4></TableHead>
                                <TableHead className='text-center px-8'><h4 className='font-bold text-[#30207a] text-lg'>Price</h4></TableHead>
                                <TableHead className='text-center px-8'><h4 className='font-bold text-[#30207a] text-lg'>Total Price</h4></TableHead>
                                <TableHead className='text-center px-8'><h4 className='font-bold text-[#30207a] text-lg'>Delete</h4></TableHead>

                            </TableRow>
                        </TableHeader>
                        {
                          uid &&  res && res?.data.length > 0 ? res?.data.map((item) => {
                                return (
                                    <>
                                        <TableBody className='bg-[#F4F4FC] '>
                                            <TableRow >
                                                <TableCell className='flex items-center w-fit'>
                                                    <Image src={item.image} alt={item.name} height={50} width={50} />
                                                    <div >
                                                        <h4 className='font-bold text-[#30207a]'>{item.name}</h4>
                                                        <span className='uppercase font-semibold text-gray-400'>{item.category}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-center '>
                                                    <span >{item.quantity}</span>
                                                </TableCell>
                                                <TableCell className='text-center'>
                                                    <span >${item.price}</span>
                                                </TableCell>
                                                <TableCell className='text-center'>
                                                    <span >${item.total}</span>
                                                </TableCell>
                                                <TableCell className='text-center pl-12 text-red-500'>
                                                    <DeleteSingleCart id={item.id} />
                                                </TableCell>
                                            </TableRow >
                                        </TableBody>
                                    </>
                                )
                            }) : <p className='flex items-center justify-center w-fit font-extrabold text-2xl'>Your Cart is Emply!</p>
                        }
                    </Table>
                </div>
                <div className=' m-4 lg:m-0 lg:mt-0 mt-8 md:mx-10'>
                    <Table >
                        <TableHeader >
                            <TableRow className='bg-[#E7E4F8] '>
                                <TableHead className='w-fit px-12' ><h4 className='font-bold text-[#30207a] text-center text-lg'> Cart Total</h4></TableHead>
                            </TableRow>
                        </TableHeader>
                    </Table>

                    <div className='bg-[#F4F4FC] rounded-sm p-10 '>
                        {
                          uid && res &&  res?.data.map((item) => {
                                const strQuantity = item.quantity
                                const strPrice = item.total

                                const itemQuantity = parseInt(strQuantity);
                                const itemPrice = parseInt(strPrice);

                                totalQuantity += itemQuantity;
                                totalPrice += itemPrice;
                                return null
                            })
                        }
                        <div className='flex space-x-16 md:space-x-[450px] lg:space-x-32 text-[#1A0B5B] font-sans font-semibold'>
                            <h3>Total Price:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <hr className="h-0.5 mt-3 mb-9 bg-[#E8E6F1]" />
                        <div className='flex space-x-[89px] md:space-x-[475px] lg:space-x-[140px] text-[#1A0B5B] font-sans font-semibold'>
                            <h3>Total Carts:</h3>
                            <h3>{totalQuantity} </h3>
                        </div>
                        <hr className="h-0.5 mt-3 mb-14 bg-[#E8E6F1]" />
                        <div className='flex items-center space-x-2 mb-6'>
                            <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="3" fill="#19D16F" />
                                <path d="M6.23649 2.40335C6.2055 2.37211 6.16863 2.34731 6.12801 2.33038C6.08739 2.31346 6.04382 2.30475 5.99982 2.30475C5.95582 2.30475 5.91225 2.31346 5.87163 2.33038C5.83101 2.34731 5.79414 2.37211 5.76315 2.40335L3.27982 4.89001L2.23649 3.84335C2.20431 3.81227 2.16633 3.78783 2.12471 3.77143C2.0831 3.75503 2.03865 3.74698 1.99393 3.74776C1.9492 3.74853 1.90506 3.75811 1.86404 3.77594C1.82301 3.79377 1.7859 3.81951 1.75482 3.85168C1.72374 3.88386 1.6993 3.92184 1.6829 3.96345C1.6665 4.00507 1.65846 4.04951 1.65923 4.09424C1.66 4.13897 1.66958 4.1831 1.68741 4.22413C1.70524 4.26516 1.73098 4.30227 1.76315 4.33335L3.04315 5.61335C3.07414 5.64459 3.11101 5.66939 3.15163 5.68631C3.19225 5.70323 3.23582 5.71195 3.27982 5.71195C3.32382 5.71195 3.36739 5.70323 3.40801 5.68631C3.44863 5.66939 3.4855 5.64459 3.51649 5.61335L6.23649 2.89335C6.27032 2.86213 6.29732 2.82425 6.31579 2.78208C6.33426 2.73992 6.3438 2.69438 6.3438 2.64835C6.3438 2.60231 6.33426 2.55678 6.31579 2.51461C6.29732 2.47245 6.27032 2.43456 6.23649 2.40335Z" fill="white" />
                            </svg>
                            <span className='text-sm'>Shipping & taxes calculated at checkout</span>
                        </div>
                        {
                                <StripeCheckout price={res?.data[0].price} />
                        }

                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={4}
                containerClassName="absolute top-0"
                containerStyle={{}}
                toastOptions={{
                    // Define default options
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


export default Cart
