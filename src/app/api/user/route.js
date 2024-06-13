import connectDB from "@/lib/connectDB";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {        
       await connectDB()
       const result = await User.find()
       console.log('Connected Successfully, route.js')
        return NextResponse.json({
        'data': result
    }, {
        status: 200
    })
    }
    catch(err) {
        
    return NextResponse.json({
        'msg': 'something went wrong!'
    }, {
        status: 400
    })
    }
    
}

export async function POST(req) {
    const data = await req.json()
    try {        
       await connectDB()
       const result = await User.create(data)
       console.log('Connected Successfully, route.js')
        return NextResponse.json({
        'data': result,
        'msg': "Data sent!"    
    
    }, {
        status: 201
    })
    }
    catch(err) {
        
    return NextResponse.json({
        'msg': 'something went wrong!'
    }, {
        status: 400
    })
    }
    
}