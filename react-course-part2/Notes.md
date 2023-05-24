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

### Creating a Reusable API Client

1. create a new file: service/apiClient.ts
2. import axios or any other api tool
3. set base URL and endpoint
4. replace the functions with API Client
5. Overloads function

In programming, function overloading refers to the ability to define multiple functions with the same name but different parameter types or a different number of parameters. Each of these functions is called an overload.

When a function is overloaded, it means that there are multiple versions of that function available, and the appropriate version is chosen based on the arguments passed during a function call. The compiler or runtime determines which overload to invoke by matching the arguments' types and number with the available overloaded function definitions.

### Creating a Reusable HTTP Service

A reusable HTTP service, in the context of web development, refers to a module or component that encapsulates functionality related to making HTTP requests to a server and provides an interface for other parts of the application to interact with the server.

The goal of a reusable HTTP service is to provide a centralized and consistent way of communicating with an HTTP server, abstracting away the details of the underlying HTTP client library (such as Axios, Fetch, or XMLHttpRequest) and providing a simplified and reusable API.

1. Create todoService
2. Encapsulate the Todo interface and the API client 
3. Apply this todoServices to our hooks
