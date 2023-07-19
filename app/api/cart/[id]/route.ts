import { cartTable, db } from "../../../../sanity/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// ⬇️ Here is the `params` property
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  try {
    const res = await db
      .delete(cartTable)
      .where(eq(cartTable.id, params.id));
    return NextResponse.json(
      { success: "Record deleted successfully", data: res },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};
