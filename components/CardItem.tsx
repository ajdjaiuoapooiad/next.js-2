import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { PostData } from '@/app/types/type'



interface CardProps {
  p: PostData[]
}
const CardItem = ({p}: CardProps) => {
  const {id, title, content, createdAt} = p

  return (
    <>
        <Card>
            <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>
            <p>{content}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
            <Link href='' className='text-blue-500'>Read more</Link>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardItem