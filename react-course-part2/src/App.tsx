
import './App.css';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/auth/AuthProvider';
import { TaskProvider } from './state-management/tasks';
import Counter from './state-management/counter/Counter';

function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>

  )
}

export default App;
