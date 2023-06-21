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

