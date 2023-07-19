import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from "../../../sanity/lib/drizzle";
import { sql } from "@vercel/postgres";

export const GET = async (request: NextRequest) => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS cart(id serial, user_id varchar(255), product_id varchar(255), name varchar(255), category varchar(255), quantity varchar(255), price varchar(255), total varchar(255), image varchar(255))`;
    const res = await db.select().from(cartTable);
    return NextResponse.json({
      success: "Record Fetched successfully",
      data: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const uid = uuid();
  const user_id = cookies().get("user_id");
  const setCookies = cookies();
  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    if (
      req.user_id ||
      req.product_id ||
      req.name ||
      req.image ||
      req.category ||
      req.quantity ||
      req.price ||
      req.total
    ) {
      if(req.quantity<=0){
        throw new Error("quantity must be greater than zero");
      }
      else{
      const res = await db
        .insert(cartTable)
        .values({
          user_id: cookies().get("user_id")?.value as string,
          product_id: req.product_id,
          name: req.name,
          image: req.image,
          category: req.category,
          quantity: req.quantity,
          price: req.price,
          total: req.total,
        })
        .returning();
      return NextResponse.json({
        success: "Cart Added Successfully",
        data: res,
      });
    }
  }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};

export const DELETE= async (req: NextRequest)=>{
  try {
    const res= await db.delete(cartTable).execute();
    return NextResponse.json({
      success: "All records deleted successfully",
  data:res
    })
  } catch (error) {
    console.log(error)
  }
}