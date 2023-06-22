import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import AuthProvider from './state-management/AuthProvider';
import TaskProvider from './state-management/TaskProvider';

function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>

  )
}

export default App;
