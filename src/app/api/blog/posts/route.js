import { NextResponse } from "next/server"

export async function GET(req) {
     const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            'Content-Type': 'application/json'
        }
     })   
     const data = await posts.json()
    return NextResponse.json({"data": data})
} 