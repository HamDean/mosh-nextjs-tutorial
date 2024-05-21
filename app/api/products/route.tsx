import { NextRequest, NextResponse } from "next/server";

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

  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}
