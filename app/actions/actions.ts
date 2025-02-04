'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { formSchema } from "../create/page";



export const post = async ({title, content}: z.infer<typeof formSchema>) => {
    await prisma.post.create({
            data: {
                title,
                content,
            }
        })
    revalidatePath('/');
    redirect('/');
}
