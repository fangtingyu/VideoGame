# VideoGame

This project is about building a video game discovery app after watching Mosh's React 18 Course

## React dependencies (that may not be downloaded yet)

`npm install`


REACT
react icons: `npm install react-icons --save`
bootstrap: `npm i bootstrap@5.3.0-alpha2`
immer `npm i immer@9.0.19`
MUI `npm install @mui/icons-material`
Styled Component `npm i @types/styled-components`

### Connect to API

axios Library for backend `npm i axios@1.3.4`
`npm install react`
`npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

### In order to create a vite react project
```
npm create vite@4.1.0
```

To install react query
`npm i @tanstack/react-query@4.28`

#### QueryClient 
QueryClient is the core object we use for managing and caching remote data in React Query

- getQueuryData is a synchronous function that can be used to get the cached data of multiple queries.
- setQueryData is a synchronous function that can be used to immediately update a query's cached data. If the query does not exist, it will be created. If the query is not utilized by a query hook in the default cacheTime of 5 minutes, the query will be garbage collected. 
-  To <b>update multiple queries at once and match query keys </b> partially, you need to use queryClient.setQueriesData instead.

