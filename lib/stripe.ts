import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePrmoise: Promise <Stripe | null>

export const getStripePrmoise=() =>{

    const key=process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
    if(!stripePrmoise && !!key){
        stripePrmoise=loadStripe(key)
    }
    return stripePrmoise
}