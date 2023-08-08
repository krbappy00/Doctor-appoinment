import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiFillSchedule,
  AiOutlineUserAdd,
} from "react-icons/ai";
import IsAdmin from "../../../customHooks/IsAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider";


const SideBar = () => {
  const {user} = useContext(AuthContext);
    const [isAdmin]=IsAdmin(user?.email)
  
    const box = {
      boxShadow:
        "4px 3px 4px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    };
  return (
    <>
      <div
        style={box}
        className="fixed z-10 flex h-[815px] w-[300px] flex-col items-center gap-2 py-8"
      >
        <NavLink
          to="/dashboard/mybooking"
          className="flex w-full items-center gap-2 p-2 pl-12 text-center font-b text-xl text-text hover:bg-bg hover:text-white [&.active]:bg-bg  [&.active]:text-white"
        >
          <AiFillSchedule className="text-2xl"></AiFillSchedule>
          My booking
        </NavLink>
        <NavLink
          to="/dashboard/account"
          className="flex w-full items-center gap-2 p-2 pl-12 text-center font-b text-xl text-text hover:bg-bg hover:text-white [&.active]:bg-bg  [&.active]:text-white"
        >
          <AiOutlineUser className="text-2xl"></AiOutlineUser>
          Account
        </NavLink>
        {isAdmin && (
          <>
            <NavLink
              to="/dashboard/allUsers"
              className="flex w-full items-center gap-2 p-2 pl-12 text-center font-b text-xl text-text hover:bg-bg hover:text-white [&.active]:bg-bg  [&.active]:text-white"
            >
              <AiOutlineUsergroupAdd className="text-2xl"></AiOutlineUsergroupAdd>
              Users
            </NavLink>
          </>
        )}
        {isAdmin && (
          <>
            <NavLink
              to="/dashboard/addDoctor"
              className="flex w-full items-center gap-2 p-2 pl-12 text-center font-b text-xl text-text hover:bg-bg hover:text-white [&.active]:bg-bg  [&.active]:text-white"
            >
              <AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd>
              Add doctor
            </NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
