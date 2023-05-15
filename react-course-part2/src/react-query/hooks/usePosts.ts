import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}


const usePostList = () => {
    const fetchPostList = () =>
        axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data)
    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPostList
    })

}

export default usePostList
