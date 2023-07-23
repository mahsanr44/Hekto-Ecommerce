"use client"
import { useRouter } from "next/navigation";
import { getStripePrmoise } from "../../lib/stripe"
import toast from 'react-hot-toast'
import { FC } from "react";


interface IProducts {

    price: number,
    quantity:number,
    name:string
}

const StripeCheckout:FC<IProducts> = async ({price,quantity,name}) => {

    const handleDeleteAll = async () => {
        const res = await fetch("/api/cart", {
            method: "DELETE",
        }
        )
    }
    const handleCart = async () => {
        const stripe = await getStripePrmoise();
        const res = await fetch('/api/stripe-session', {
            method: 'POST',
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({price,quantity,name}) 

        })
        const data = await res.json();
        console.log(data)
        if (data.session) {

            stripe?.redirectToCheckout({ sessionId: data.session.id })
            toast.loading('Proceeding to Checkout');
        }
        toast.error('Your Cart is Empty!');
    }
    return (
        <div className='flex items-center justify-center '>
            <button
                className='bg-green-400 rounded-sm p-2 w-full text-white hover:cursor-pointer'
                onClick={()=>{handleCart();
                              handleDeleteAll()}
                }
            >Proceed To Checkout
            </button>
        </div>
    )
}

export default StripeCheckout
