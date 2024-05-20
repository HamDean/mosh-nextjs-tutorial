import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "aa" },
  { id: 3, name: "aaa" },
];

export function GET(request: NextRequest) {
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = {
    id: users.length + 1,
    name: body.name,
  };
  users.push(user);

  return NextResponse.json(user);
}
