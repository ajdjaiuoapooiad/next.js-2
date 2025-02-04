import CardList from '@/components/CardList'


import React from 'react'
import { PostData } from './types/type'


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  })
  const data: PostData[] = await res.json()
  console.log(data);

  return data;

}

const Home = async () => {
  const data = await getStaticProps()

  return (
    <div className='grid lg:grid-cols-3 p-4 gap-4'>
      <CardList posts={data} />

    </div>
  )
}

export default Home