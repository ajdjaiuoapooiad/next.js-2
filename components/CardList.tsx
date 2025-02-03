import React from 'react'
import CardItem from './CardItem'
import { PostData } from '@/app/types/type'


interface CardListProps {
  posts: PostData[]
}
const CardList = ({posts}: CardListProps) => {
  return (
    <>
    
        {posts.map((post: PostData) => (
          <CardItem key={post.id} p={post} />
        ))}

    </>
  )
}

export default CardList