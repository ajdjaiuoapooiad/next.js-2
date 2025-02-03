import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async (req: Request) =>  {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
}