import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import products from "../data";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: id, name: "Apple", price: 5.0 });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  let product = products.find((product) => product.id === parseInt(id));
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const validationResult = schema.safeParse(body);
  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors, {
      status: 400,
    });

  product.name = body.name;
  product.price = body.price;

  return NextResponse.json(product);
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const filteredProducts = products.filter(
    (product) => product.id !== parseInt(id)
  );

  return NextResponse.json(filteredProducts);
}
