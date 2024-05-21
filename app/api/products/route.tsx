import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.4 },
    { id: 2, name: "Sugar", price: 1.4 },
    { id: 3, name: "Bread", price: 2.7 },
  ]);
}
