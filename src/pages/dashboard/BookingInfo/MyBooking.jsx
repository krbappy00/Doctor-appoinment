import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider";

const MyBooking = () => {
  const { user, logOut } = useContext(AuthContext);
      const {
        data: bookings,
        
      } = useQuery({
        queryKey: ["bookings", user.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/api/bookings?email=${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
          
          console.log(res)
          if(res.status === 403 || res.status===401){
              return res.data=[], logOut();
              
          }
          const data = await res.json();
          return data;
        },
      });
  return (
    <div className="w-full bg-gray-200 ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gray-300 font-b text-xl text-text">
            <tr className="">
              <th></th>
              <th>Treatment Name</th>
              <th>Patient</th>
              <th>Time</th>
              <th>Date</th>
              <th>Email</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((book,i)=>{
              return (
                <tr key={book._id}>
                  <th>{i + 1}</th>
                  <td>{book.serviceName}</td>
                  <td>{book.patientName}</td>
                  <td>{book.slot}</td>
                  <td>{book.appointmentDate}</td>
                  <td>{book.email}</td>
                  <td>{book.phone}</td>
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

export default MyBooking;
