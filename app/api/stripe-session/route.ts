import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export const POST = async (request: NextRequest) => {
  const req  = await request.json()
  console.log(req); 

  try {
    if (req) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types:["card"],
        billing_address_collection:"auto",
        line_items: [
          {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: req.name,
                  
              },
                  unit_amount: req.price*100,
              },
              quantity: req.quantity
          },
      ],
        success_url: `${request.headers.get("origin")}/cart`,
        cancel_url: `${request.headers.get("origin")}/cart`,
      });
      return NextResponse.json({
        session: session,
      });
    } else {
      console.log("No Data Found");
      return NextResponse.json({
        error: "No Data Found",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: err,
    });
  }
};
