import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}


const usePosts = (userId: number | undefined) => useQuery<Post[], Error>({
    // /user/1/posts
    queryKey: ['users', userId, 'posts'],
    queryFn: () => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId
            }
        })
        .then(res => res.data)
})


export default usePosts
