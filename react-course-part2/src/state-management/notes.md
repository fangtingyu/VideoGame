# Reducer

Reducer is a function that allows us to centralize state updates in a component

Steps to create the counter reducer:
1. Create a `counterReducer` file and create a function
2. Identify state and actions of the reducer
3. Create an interface to restrict the type of actions
4. Get back to the Counter component, replace the useState with the useReducer(reducerName, initialState)
5. in the  [value,setValue], change the setValue to `dispatch`
6. When using dispatch, need to specify which action the reducer is dispatching. `dispatch({ type: 'RESET' })`
