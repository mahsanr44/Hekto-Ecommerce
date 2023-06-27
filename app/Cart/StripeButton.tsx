"use client"
import toast from 'react-hot-toast'
const notify = () => toast.loading('Proceeding ');

const StripeButton = () => {
    return (
        <div className='flex items-center justify-center '>
            <button
                onClick={notify}
                className='bg-green-400 rounded-sm p-2 w-full text-white'>Proceed To Checkout
            </button>
        </div>
    )
}

export default StripeButton
