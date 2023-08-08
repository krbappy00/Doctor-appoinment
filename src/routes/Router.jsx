import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Appointment from "../pages/home/appointment/Appointment";
import SignUp from "../pages/login/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyBooking from "../pages/dashboard/BookingInfo/MyBooking";
import MyAccount from "../pages/dashboard/myaccount/MyAccount";
import AllUsers from "../pages/dashboard/usersList/AllUsers";
import AdminRoute from "./adminRoute/AdminRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import AddDoctor from "../pages/dashboard/addDoctor/AddDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
            <Dashboard></Dashboard>
        ),
      },
      {
        path: "/dashboard/mybooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/account",
        element: (
          <PrivateRoute>
            <MyAccount></MyAccount>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;