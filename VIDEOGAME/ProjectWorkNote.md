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

### Fetching Games

### Removing Duplicate Interfaces

### Creating a Reusable API Client

### Implementing Infinite Queries

### Simplifying Query Objects

### Creating Lookup Hooks

### Simplifying Time Calculations