import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const useTodos = () => {
    const fetchTodos = () =>
        axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos') //fetch data from backend, returns a response object
            .then(res => res.data)
    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })

}

export default useTodos