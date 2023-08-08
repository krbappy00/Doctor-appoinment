import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import SideBar from "../pages/dashboard/sidebar/SideBar";

const DashboardLayout = () => {
    return (
      <div className="">
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <div className="ml-[16%] w-full z-0">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;