import { useLoaderData } from "react-router-dom";
import User from "../User/User.jsx";
import "./Users.css";
const Users = () => {
  const users = useLoaderData();
  return (
    <div className="user-container">
      <h2>Users : {users.length}</h2>
      <div className="user-list">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
      <p>Here you can find a list of users.</p>
    </div>
  );
};

export default Users;
