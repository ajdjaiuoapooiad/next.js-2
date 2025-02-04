import { PostData } from '@/app/types/type';
import Link from 'next/link';

import React from 'react'





export async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })
  const data: PostData = await res.json()
  console.log(data);

  return data;

}

const ShowPage = async ({params}: {params: {id: number}}) => {
    const post = await getData(params.id);
    const {title, content} = post
    console.log(post);
    

  return (
    <div className='max-auto max-w-4xl p-4'>
        <div className='mb-8'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-gray-700'>{content}</p>
        </div>
        <div className='mb-8'>
            <p className='text-gray-900'>{content}</p>
        </div>

        <Link href={`/`} className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md'>戻る</Link>
    </div>
  )
}

export default ShowPage