import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      {/* No requests send to the server because the content of user list has already shipped to the client*/}
      <Link to="/users"> Users </Link>
      <Link to="/contact"> Contact </Link>
      {/* <a href="/users">Users</a> */}
    </>
  );
};

export default HomePage;
