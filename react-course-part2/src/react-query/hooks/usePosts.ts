import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    page: number;
    pageSize: number
}

const usePosts = (query: PostQuery) => useQuery<Post[], Error>({

    queryKey: ['posts', query], // every time our query changes, react query will fetch the posts from the backend.
    queryFn: () => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (query.page - 1) * query.pageSize, // initial start index number
                _limit: query.pageSize
            }
        })
        .then(res => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true
})


export default usePosts
