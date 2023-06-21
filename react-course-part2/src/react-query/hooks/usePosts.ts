import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    pageSize: number
}

const usePosts = (query: PostQuery) => useInfiniteQuery<Post[], Error>({

    queryKey: ['posts', query], // every time our query changes, react query will fetch the posts from the backend.
    queryFn: ({ pageParam = 1 }) => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (pageParam - 1) * query.pageSize, // initial start index number
                _limit: query.pageSize
            }
        })
        .then(res => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
        // 1-> 2, if you are on page 1, you should return page 2
        return lastPage.length > 0 ? allPages.length + 1 : undefined;

    }
})


export default usePosts
