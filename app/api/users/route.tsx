import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    return NextResponse.json([
        { id: 1, name: 'a'},
        { id: 2, name: 'aa'},
        { id: 3, name: 'aaa'},
    ])
}