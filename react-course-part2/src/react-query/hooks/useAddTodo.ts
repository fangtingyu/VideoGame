import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from '../constants';
import { Todo } from './useTodos';

interface AddTodoContext {
    previousTodos: Todo[]
}


const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then(res => res.data),
        // This function is called before our mutation is executed.
        onMutate: (newTodo: Todo) => {
            //getQueryData is a synchronous function that can be used to get the cached data of multiple queries.
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            // In this function, we should update the query cache right away
            queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
                newTodo,
                ...(todos || [])
            ]);
            onAdd();
            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) =>
                    todo === newTodo ? savedTodo : todo
                )
            );
        },

        onError: (error, newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    })
}

export default useAddTodo