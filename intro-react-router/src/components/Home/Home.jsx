import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>This is the home component</h2>
      <Outlet></Outlet>{" "}
      {/* This will render the child routes like About and Contact */}
    </div>
  );
};

export default Home;
