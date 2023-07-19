"use client"
import { useRouter } from "next/navigation";
import { getStripePrmoise } from "../../lib/stripe"
import toast from 'react-hot-toast'
import { CartTypes } from "../../sanity/lib/drizzle";
import { FC } from "react";
const notify = () => toast.loading('Proceeding to Checkout');

const product = [{
    product: 1,
    name: "Hackathon Products",
    price: 100,
    quantity: 3
}]
interface IProducts {
    
    price: string,
}

const StripeCheckout:FC<IProducts> = async ({ price}) => {
    const { refresh } = useRouter();

    const handleDeleteAll = async () => {

        const res = await fetch("/api/cart", {
            method: "DELETE",
        }
        )
        refresh()
    }
    const handleCart = async () => {
        const stripe = await getStripePrmoise();
        const res = await fetch('/api/stripe-session', {
            method: 'POST',
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({product})
            
        })
        const data = await res.json();
        console.log(data)
        if (data.session) {

            stripe?.redirectToCheckout({ sessionId: data.session.id })
        }
    }
    return (
        <div className='flex items-center justify-center '>
            <button
                className='bg-green-400 rounded-sm p-2 w-full text-white hover:cursor-pointer'
                onClick={
                    handleCart
                }
            >Proceed To Checkout
            </button>
        </div>
    )
}

export default StripeCheckout
