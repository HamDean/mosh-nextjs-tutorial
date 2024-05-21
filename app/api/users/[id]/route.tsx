import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "aa" },
  { id: 3, name: "aaa" },
];

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
  { params: { id } }: { params: { id: number } }
) {
  // Extract the id from the params obj --
  // extract the request body
  const body = await request.json();
  // fetch the user with the given ID
  const user = users.filter((user) => user.id === id);
  // update the user
  user[0].name = body.name;

  NextResponse.json(user);
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const filteredUsers = users.filter((user) => user.id !== id);

  return NextResponse.json({});
}
