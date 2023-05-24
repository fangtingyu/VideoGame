### Optimistic Updates
- onMutate <br>
To implement an optimistic update, first we should implement the unmutated callback. 
In this function, we update the query cache, so the UI gets updated right away.

- onError <br>
At the end, we return a context object includes the previous data. We'll use the context in case our request fails.
So we handle the onError and use the previous Todos of context to update the query cache. 

- onSuccess <br>
Now if the request is successful, we replace the new Todos with the saved todo we get from the backend.


### Creating a Custom Mutation Hook

1. create a new file: useAddTodo
2. copy & paste the useMutation hook from TodoForm to useAddTodo
3. import missing imports
4. extract the html element as a callback function (A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.)
5. create constant.ts file to replace all the repeatedly used keys.