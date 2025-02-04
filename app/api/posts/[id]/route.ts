import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async (
    req: Request, 
    {params}: {params: {id: string}}
) =>  {
    const id = params.id
    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
    })
    return NextResponse.json(post)
}