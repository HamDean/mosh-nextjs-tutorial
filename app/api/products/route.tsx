import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import products from "./data";

export function GET(request: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validationResult = schema.safeParse(body);

  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors[1].message, { status: 400 });

  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}
