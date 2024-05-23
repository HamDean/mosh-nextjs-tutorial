import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(requset: NextRequest){
    const token = await getToken({ req: requset})
    return NextResponse.json(token)
} 