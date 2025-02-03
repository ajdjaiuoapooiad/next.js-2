import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const CardItem = () => {
  return (
    <>
        <Card>
            <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
            <Link href='' className='text-blue-500'>Read more</Link>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardItem