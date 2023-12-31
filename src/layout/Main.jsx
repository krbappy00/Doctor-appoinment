import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";

const Main = () => {
    return (
      <div className="">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;