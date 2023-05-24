## Project Work - improving the Game hub

### Fetching Genres

In the previous version, the genre was saved as constant, after learning react query, we can fetch the genre and save it in cache.

1. install react query and react query dev tools

    `npm i @tanstack/react-query@4.28`

    `npm i @tanstack/react-query-devtools@4.28`

2. import react query & react query devtool in main.tsx
3. refactoring our code - implement useQuery in useGenres Hook:

    The `useQuery` hook allows you to fetch and manage data from an API endpoint or any other asynchronous data source. It simplifies the process of making API requests, handling loading and error states, and caching the data for efficient subsequent retrievals.

    The `queryKey` and `queryFn` work together to define a query and determine when and how the data is fetched. The queryKey provides a unique identifier for the query, and the queryFn specifies the function responsible for fetching the data.

    In React Query, the `initialData` is an optional parameter that can be passed to the useQuery hook. It allows you to provide initial data for a query before the actual data is fetched.

    
### Fetching Platforms

1. Similar procedure to the fetching genres.

    However still getting the following error:

        No overload matches this call.
        The last overload gave the following error.
        Argument of type '{ queryKey: string[]; queryFn: () => Promise<FetchResponse<Platform>>; staleTime: number; initialData: { count: 8; results: readonly ["PC", "PlayStation", "Xbox", ... 4 more ..., "Sony"]; }; }' is not assignable to parameter of type 'QueryKey'.
        Object literal may only specify known properties, and 'queryKey' does not exist in type 'readonly unknown[]'.

2. The reason for the above issue: <br>

    `["PC", "PlayStation", "Xbox", ... 4 more ..., "Sony"] `
    
    does not match with the FetchResponse<Platform> format:
    ```
    interface Platform {
        id: number;
        name: string;
        slug: string;
    }
    ```
    Solution: changed the data/platforms format. 
### Fetching Games

### Removing Duplicate Interfaces

### Creating a Reusable API Client

### Implementing Infinite Queries

### Simplifying Query Objects

### Creating Lookup Hooks

### Simplifying Time Calculations