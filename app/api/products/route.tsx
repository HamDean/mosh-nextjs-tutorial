import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const products = [
  { id: 1, name: "Milk", price: 2.4 },
  { id: 2, name: "Sugar", price: 1.4 },
  { id: 3, name: "Bread", price: 2.7 },
];

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
