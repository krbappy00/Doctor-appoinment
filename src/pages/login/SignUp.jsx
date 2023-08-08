import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useToken from "../../customHooks/useToken";



const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false); 
  const [confirmPass,setConfirm] = useState(false);
  const [createdUserEmail,setCreatedUserEmail] = useState('');
  console.log(createdUserEmail);
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate('/');
  }

    const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit =(data) => {
      console.log(data)
      createUser(data.email,data.password)
      .then(()=>{
        const userData = {
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email,
          phone:data.phone,
        }
        
        axios
          .post("http://localhost:5000/api/users", userData)
          .then((res) => {
            setCreatedUserEmail(data.email);
          })
          .catch((err) => console.log(err));
        toast.success(`Hi ${data.firstName} You Successfully SignUp`);
        const userInfo = {
          displayName: data.firstName,
        };
        updateUser(userInfo)
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(error =>{
        console.log(error)
      })
    };
    
    
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 flex min-h-screen">
          <div className=" [&>:not(:first-child)]:text-md mx-auto flex w-[80%] flex-col md:w-[25%] lg:w-[25%] [&>*]:rounded-lg [&>*]:border-2 [&>:not(div)]:mb-3 ">
            <h1 className="border-none text-center text-text">Sign Up</h1>
            <input
              {...register("firstName", {
                required: "Name is required",
              })}
              className="mt-4 p-3 required:border-red-500 focus:outline-text"
              type="text"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="border-none text-red-600">
                {errors.firstName?.message}*
              </p>
            )}
            <input
              {...register("lastName")}
              className="p-3 focus:outline-text"
              type="text"
              placeholder="Last name"
            />
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className="p-3 required:border-red-500 focus:outline-text"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="border-none text-red-600">
                {errors.email?.message}*
              </p>
            )}

            <input
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 11,
                  message: "Phone number must be 11 character!",
                },
              })}
              className="p-3 required:border-red-500 focus:outline-text"
              type="tel"
              placeholder="Phone number"
            />
            {errors.phone && (
              <p className="border-none text-red-600">
                {errors.phone?.message}*
              </p>
            )}
            <div className="relative w-full border-none ">
              <input
                {...register("password", {
                  required: "Without Password How you can Login MotherFucker!",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Password Must be min 8 letter, with at least a symbol, upper and lower case letters and a number!! 😂",
                  },
                })}
                className="relative w-full rounded-md border-2  p-3 outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <label
                className="absolute right-5 top-4 cursor-pointer"
                htmlFor="password"
              >
                {showPassword ? (
                  <>
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(false)}
                      className="text-xl"
                    ></AiOutlineEyeInvisible>
                  </>
                ) : (
                  <>
                    <AiOutlineEye
                      onClick={() => setShowPassword(true)}
                      className="text-xl"
                    ></AiOutlineEye>
                  </>
                )}
              </label>
            </div>

            {errors.password && (
              <p className="border-none text-red-600">
                {errors.password?.message}*
              </p>
            )}
            <div className="relative w-full border-none mt-2">
              <input
                {...register("confirmPassword", {
                  required: "Please Confirm Your password Sir 😑",
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your passwords do no match Sir 🤐";
                    }
                  },
                })}
                type={confirmPass ? "text" : "password"}
                className="relative w-full rounded-md border-2  p-3 outline-none"
                placeholder="Confirm password"
                id="pass"
              />
              <label
                className="absolute right-5 top-4 cursor-pointer"
                htmlFor="pass"
              >
                {confirmPass ? (
                  <>
                    <AiOutlineEyeInvisible
                      onClick={() => setConfirm(false)}
                      className="text-xl"
                    ></AiOutlineEyeInvisible>
                  </>
                ) : (
                  <>
                    <AiOutlineEye
                      onClick={() => setConfirm(true)}
                      className="text-xl"
                    ></AiOutlineEye>
                  </>
                )}
              </label>
            </div>

            {errors.confirmPassword && (
              <p className="border-none text-red-600">
                {errors.confirmPassword?.message}*
              </p>
            )}
            <button type="submit" className="mb-0 mt-4 bg-text p-3 text-white">
              SIGNUP
            </button>

            <p className="border-none text-center font-b text-text">
              Already have an account?{" "}
              <span className="text-bg">Login now</span>
            </p>
            <div className="divider mb-4 mt-2 border-none text-text">OR</div>
            <div className="flex items-center justify-center gap-4 border-[1px] border-text">
              <FcGoogle className="text-xl"></FcGoogle>
              <p className="p-3 font-b text-text">CONTINUE WITH GOOGLE</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
