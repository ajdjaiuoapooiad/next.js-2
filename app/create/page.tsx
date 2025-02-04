"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { post } from '../actions/actions'


export const formSchema = z.object({
    title: z
      .string()
      .min(2, { message: "タイトルは2文字以上で入力してください。" }),
    content: z
      .string()
      .min(10, { message: "本文は10文字以上で入力してください。" })
      .max(140, { message: "本文は140文字以内で入力してください。" }),
  });
  
const CreatePage = () => {
    const router = useRouter()


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          content: "",
        },
      });

     async function onSubmit(values: z.infer<typeof formSchema>) {
        const { title, content } = values
        post({title, content})
    }

  return (
    <>
        <Form {...form}>
            <form  className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" {...field} />
                    </FormControl>
                
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                    <Textarea
                    placeholder="投稿内容"
                    className="resize-none"
                    {...field}
                    />
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    </>
  )
}

export default CreatePage