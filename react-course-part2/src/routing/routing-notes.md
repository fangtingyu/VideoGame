# Set up
`npm i react-router-dom@6.10.0`

- react router has the reputation of breaking changes XD

Each router should have 2 components:
one path and one element - the element is the React Component

Steps:
1. Create a routes.tsx (tsx!!!)
2. Use the createBrowserRouter()
3. Create a router as a list of path {} object
4. ``` 
    const router = createBrowserRouter([{ path: '/', element: <HomePage /> },
    { path: '/users', element: <UserListPage /> }])
5. Go to main.tsx
6. Replace `<APP />` with `<RouterProvider router={router} />`