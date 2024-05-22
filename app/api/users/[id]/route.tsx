import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: id, name: "Dean" });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const body = await request.json();

  const validationResult = schema.safeParse(body);
  if (!validationResult.success)
    return NextResponse.json(
      { error: validationResult.error.errors },
      { status: 400 }
    );

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id)}
  })

  return NextResponse.json(deletedUser);
}
