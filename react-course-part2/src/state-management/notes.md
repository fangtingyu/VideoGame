# Reducer

Reducer is a function that allows us to centralize state updates in a component

### Consolidating state logic with a reducer
Steps to create the counter reducer:
1. Create a `counterReducer` file and create a function
2. Identify state and actions of the reducer
3. Create an interface to restrict the type of actions
4. Get back to the Counter component, replace the useState with the useReducer(reducerName, initialState)
5. in the  [value,setValue], change the setValue to `dispatch`
6. When using dispatch, need to specify which action the reducer is dispatching. `dispatch({ type: 'RESET' })`

 ### Creating Complex Actions
 
 Steps to create the tasks reducer:
 1. Create a `tasksReducer` file and create a function
 2. Identify state and actions of the reducer
 Because each action requires for different input parameters, we need to create different interface for each action then.
 ```
 interface Action1:
 {type:;
 input_parameter:;}

 interface Action2:
 {type:;
 input_parameter:;}

 type Actions = Action1 | Action2 
 ```
 3. Instead of using if conditions, using `switch(action.type)`
 4. Get back to the TaskList component, replace the useState with the useReducer
 5. following the same procedure
 6. When dispatching, specify the input parameters

<br>

# Sharing State

Lift the state up to the closet parent and pass it down as props to child components
Issue: `prop drilling`

Solution: `React Context`

React Context allows sharing data without passing it down through many components in the middle.

<br>

## Sharing State Using React Context

To share state using React context, there are three things we need to do:
1. We need to lift the state up to the closet parent
    In the example, we lift the task state to the App component
2. Second, we should create a context
    keywords: `ContextType`, `Dispatch<ActionType>`, `React.createContext<ContextType>`

    Context is like a truck that transporting data, therefore, we need to identify the shape of the data, i.e. `interface ContextTYpe`
    
    ```
    <!-- From the useReducer Hook-->
    interface ContextType{
        state:
        dispatch: Dispatch <ActionType>
    }

    const Context = React.createContext<ContextType>({} as ContextType )
    ```

3. Once we have the Context, we wrap our component tree using a provider component `<Context.Provider value ={}>`

## Create a Custom Provider

1. Create a provider component
2. Move reducer and context into that provider component
3. Import ReactNode as a children and pass the children as a Props to the function
4. Wrap other components within the new-created provider component 

## Create a Hook to access context

With that, we can clear our imports.

there are benefits to accessing context using a hook compared to directly using the React context API. Here are some advantages:

- Simpler syntax: Accessing context using a hook provides a simpler and more concise syntax compared to using the context API directly. Hooks allow you to write more compact code and make the context usage more readable within functional components.

- Easier consumption: Using a hook to access context abstracts away the details of the context implementation, making it easier for component developers to consume the context. With a hook, you can simply call the hook function and retrieve the context value without worrying about the context provider or the useContext hook.

- Encapsulation and reusability: By creating a custom hook to access context, you can encapsulate the logic for consuming the context within the hook itself. This promotes reusability as you can use the same hook in multiple components, making it easier to share context-related functionality across your application.

- Testing flexibility: Hooks, including the custom hook for accessing context, can be easily tested in isolation. You can mock the context values and behaviors within your tests, allowing you to focus on testing the component that consumes the context without worrying about the context implementation details.

- Abstraction from implementation changes: Using a hook to access context provides an abstraction layer between the components and the context implementation. This means that if the implementation of the context changes in the future (e.g., switching from React context to a different state management library), you can update the custom hook to accommodate the changes without modifying all the components that consume the context.

# React Context

A context should only hold values that are closely related and tend to change together
- -> A single context should have one single purpose

## Minimizing renders
Split up a context into smaller and focused ones, each having a single responsibility.

## When to use Context

### Server State - React Query
- In the real case, we should not use context for the tasks because it is most likely to interact with the backend database

You should avoid using context for the server state. Because you will end up with too many context each holding a certain type of objects.

Server state refers to the data or state that is stored and managed on the server-side of an application. It typically resides on the backend or server infrastructure and is responsible for serving data to the client or handling business logic.

Examples of server state include:

- User data: Information about registered users, their profiles, authentication tokens, and authorization roles are typically stored on the server. This data is fetched from the server and used to authenticate and authorize users on the client-side.

- Database records: Data stored in a database, such as posts, comments, product listings, or any other persistent data, is considered part of the server state. Clients request this data from the server to display or manipulate it.

- Server-side session state: In web applications, session state refers to data that is stored on the server and associated with a particular user session. This can include information like shopping cart contents, temporary user preferences, or other session-specific data.


### Client State

Client state refers to the data or state that is managed on the client-side of an application. It resides within the client's browser or device and is responsible for handling UI interactions, user preferences, and temporary data.

Examples of client state include:

- Form inputs: When a user fills out a form on a webpage, the entered data is stored as client state until it is submitted to the server. This allows for real-time validation, local error handling, and a better user experience.

- UI state: The state of UI components, such as expanded/collapsed sections, selected tabs, or active filters, is typically managed as client state. These states affect the visual presentation and behavior of the application without directly involving server interactions.

- Local caching: Clients can store frequently accessed data locally to improve performance and reduce server requests. This can include caching API responses, storing preferences, or saving temporary data during a session.

# Context vs Redux
### By using Redux, you can:

- Cache the server state
- Persist it in local storage
- Components can select pieces of state
- Undo things
- Use middleware and log actions
- Decouple from React
- See state changes over time