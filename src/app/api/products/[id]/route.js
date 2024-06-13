import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    console.log(params.id)
    return NextResponse.json({"msg": 'Works Perfect!'})
} 