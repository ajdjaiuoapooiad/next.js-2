import { PostData } from '@/app/types/type';
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
    console.log(post);
    

  return (
    <div>ShowPage</div>
  )
}

export default ShowPage