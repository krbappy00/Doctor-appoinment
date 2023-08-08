import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authProvider";
import toast from "react-hot-toast";
import useToken from "../../customHooks/useToken";
  


const Login = () => {
  const [logInError,setLogInError] = useState("")
  const [authemail, setEmail] = useState("");

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [token] = useToken(authemail);
  if (token) {
      navigate(from, { replace: true });  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setEmail(data.email);
    setLogInError("");
    logIn(data.email, data.password)
      .then((userInfo) => {
        const user = userInfo.user;
        toast.success(`Hi ${user.displayName} SuccessFully LoggedIn!`);
      })
      .catch((error) => {
        console.log(error.message);
        setLogInError(error.message);
      });
  };
  const isError = errors.email || errors.password;
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 flex min-h-screen">
          <div className="mx-auto flex w-[80%] flex-col gap-2 md:w-[25%] lg:w-[25%] [&>*]:rounded-lg [&>*]:border-2 [&>:not(p)]:p-3 [&>:not(:first-child)]:mb-2 [&>:not(:first-child)]:text-xl">
            <h1 className="border-none text-center text-text ">Log In</h1>
            <input
              {...register("email", { required: true })}
              className="focus:outline-text"
              type="text"
              placeholder="Email"
            />
            <input
              {...register("password", { required: true })}
              className="focus:outline-text "
              type="text"
              placeholder="Password"
            />
            {logInError && <p className="text-red-500 border-none p-0 m-0">{logInError}</p>}
            <button type="submit" className="mt-4 bg-text text-white">
              LOGIN
            </button>
            {isError ? (
              <>
                <span className="mb-0 border-none p-0 text-red-600">
                  This field is required
                </span>
              </>
            ) : (
              <></>
            )}{" "}
            <p className="mb-0 border-none p-0 text-center font-b text-text">
              New to Doctors Portal?{" "}
              <Link to="/signup">
                {" "}
                <span className="mb-0 p-0 text-bg">Create new account</span>
              </Link>
            </p>
            <div className="divider mb-0 border-none p-0 text-text">OR</div>
            <div className="flex items-center justify-center gap-4 border-[1px] border-text">
              <FcGoogle className="text-xl"></FcGoogle>
              <p className="font-b text-text">CONTINUE WITH GOOGLE</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
