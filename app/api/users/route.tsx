import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "aa" },
  { id: 3, name: "aaa" },
];

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });

  return NextResponse.json(newUser)

}
