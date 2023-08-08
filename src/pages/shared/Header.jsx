import logo from '../../assets/ll.svg';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { AuthContext } from '../../context/authProvider';
import IsAdmin from '../../customHooks/IsAdmin';


const Header = () => {
  const [navColor, setnavColor] = useState("transparent");
  const [open,setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = IsAdmin(user?.email);



  const handleLogout = () =>{
    logOut()
    .then(()=>{
      console.log("logout succesfull!")
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#00ADB5") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
    return (
      <div
        className={"sticky top-0 z-50 flex h-[120px] items-center shadow-md "}
        style={{
          backgroundColor: "white",
          transition: "all 1s",
        }}
      >
        <div className="relative mx-auto flex h-[120px] w-[90%] items-center justify-between md:p-4 lg:p-4">
          <div className="flex w-[100%] items-center justify-between">
            <img
              className="h-[65px] w-[65px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] "
              src={logo}
              alt=""
            />
            <div
              className="hidden max-[640px]:block"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <>
                  <button>
                    <div className=" text-4xl ">
                      <HiX></HiX>
                    </div>
                  </button>
                  <div className="absolute left-[-20px] top-[108px] h-[500px] w-screen transform bg-text duration-700 ease-in">
                    <div className="flex flex-col">
                      <NavLink
                        to="/"
                        className="cursor-pointer rounded-lg px-4 py-2  text-white hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/appointment"
                        className="cursor-pointer rounded-lg px-4 py-2  text-white hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                      >
                        Appointment
                      </NavLink>
                      {user ? (
                        <>
                          <NavLink
                            to="/dashboard"
                            className="cursor-pointer rounded-lg px-4 py-2  text-white hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                          >
                            Dashboard
                          </NavLink>
                        </>
                      ) : (
                        <></>
                      )}

                      {user ? (
                        <>
                          <div>
                            <p className="ml-4 flex flex-col text-red-500">
                              Hi, {user.displayName}{" "}
                              {isAdmin ? (
                                  <span className="badge badge-primary badge-outline mr-2">
                                    admin
                                  </span>
                              ) : (
                                  <span className="badge bg-bg text-white">
                                    user
                                  </span>
                              )}
                            </p>
                            <button
                              className="cursor-pointer rounded-lg px-4 py-2  text-white hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <NavLink
                            to="/login"
                            className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                          >
                            Login
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <button>
                  <div className="text-4xl">
                    <HiMenu></HiMenu>
                  </div>
                </button>
              )}
            </div>
            <div className="hidden font-b text-xl md:flex md:gap-20">
              <NavLink
                to="/"
                className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/appointment"
                className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
              >
                Appointment
              </NavLink>

              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                  >
                    Dashboard
                  </NavLink>
                </>
              ) : (
                <></>
              )}

              {user ? (
                <>
                  <p className="flex items-center text-red-500">
                    Hi, {user.displayName}
                    {isAdmin ? (
                      <>
                        <span className="badge bg-bg text-white">admin</span>
                      </>
                    ) : (
                      <>
                        <span className="badge badge-primary badge-outline mr-2">
                          user
                        </span>
                      </>
                    )}
                  </p>
                  <button
                    className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="cursor-pointer rounded-lg px-4 py-2  text-text hover:bg-bg hover:text-white [&.active]:bg-bg [&.active]:text-white"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;