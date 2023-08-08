import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { AuthContext } from "../../../context/authProvider";

const AllUsers = () => {
  const {data:users=[],refetch} = useQuery({
    queryKey:['users',],
    queryFn:async ()=>{
      const res = await axios.get("http://localhost:5000/api/users");
      const data = res.data;
      return data;
    }
  })

  const handleMakeAdmin =async (id)=>{
   await fetch(`http://localhost:5000/api/users/admin/${id}`, {
     method: "PUT",
     headers:{
      authorization:`Bearer ${localStorage.getItem('accessToken')}`
     }
   })
     .then((res) => res.json())
     .then((data) => {
       if(data.modifiedCount>0){
        refetch()
       }
     });

  }


    return (
      <div className="w-full bg-gray-200 z-0">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" bg-gray-300 font-b text-xl text-text">
              <tr className="">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Role</th>
                <th>Remove user</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => {
                return (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      {user?.role !== "admin" ? (
                        <>
                          <div className="badge badge-primary badge-outline mr-2">
                            User
                          </div>
                          <button
                            onClick={() => {
                              handleMakeAdmin(user._id);
                            }}
                            className="rounded-md bg-green-800 px-4 py-2 text-white"
                          >
                            Make admin
                          </button>
                        </>
                      ) : (
                        <div className="badge bg-bg text-white">Admin</div>
                      )}
                    </td>
                    <td>
                      <button className="rounded-md bg-red-800 px-4 py-2 text-white">
                        <div className="flex items-center justify-center gap-1">
                          <RxCrossCircled className="text-xl"></RxCrossCircled>
                          Delete
                        </div>
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* row 1 */}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;