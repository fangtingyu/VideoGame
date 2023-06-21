import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants';
import todoService, { Todo } from '../services/todoService';

interface AddTodoContext {
    previousTodos: Todo[]
}
const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,
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
        onSuccess: (savedTodo: Todo, newTodo: Todo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) =>
                    todo === newTodo ? savedTodo : todo
                )
            );
        },

        onError: (error: Error, newTodo: Todo, context: AddTodoContext) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    })
}

export default useAddTodo