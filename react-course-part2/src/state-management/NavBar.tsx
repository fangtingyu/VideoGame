import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import AuthContext from './tasks/tasksContext';
import useCounterStore from './counter/store';

const NavBar = () => {
  const { tasks } = useContext(AuthContext);
  const counter = useCounterStore(s => s.counter) // In this case, the component is depend on the counter property only

  console.log("render navbar")

  return (
    <nav className="navbar d-flex justify-content-between">
      {/* <span className="badge text-bg-secondary">{tasks.length}</span> */}
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
