import { NextResponse } from "next/server";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    // console.log("Params", searchParams)

    return NextResponse.json({
        'msg': 'Works like a charm!!'
    })
}

export async function POST(req) {
    const data = await req.formData()
    console.log(data.get("Name"))
    console.log(data.get("Email"))
    return NextResponse.json({
        'msg': 'Works like a charm!!'
    }, {status: 201})   
}