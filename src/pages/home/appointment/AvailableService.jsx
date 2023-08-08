import { format } from "date-fns";
import axios from "axios";
import BookingModal from "./BookingModal";
import {useState } from "react";
import img from '../../../assets/Appointment banner/serviceIcon/tooth.png'
import { useQuery } from "@tanstack/react-query";


const AvailableService = ({ selected }) => {
    const [treatment,setTreatment] = useState();
    const [sucess, setSucess] = useState(false);

    const date = format(selected, "PP");

    const {
      data: services,
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["bookingOptions", date],
      queryFn: async () =>{
        const res = await fetch(`http://localhost:5000/api/v2/bookingOptions?date=${date}`);
        const data = await res.json();
        return data;

        }
          
    });
     if (isLoading) {
       return <span>Loading...</span>;
     }

     if (isError) {
       return <span>Error: {error.message}</span>;
     }
    console.log(services);
    
  
  return (
    <div>
      <div className="mt-4">
        <BookingModal
          treatment={treatment}
          selected={selected}
          sucess={sucess}
          setSucess={setSucess}
          refetch={refetch}
        />
        <h1 className="text-center text-4xl text-bg">
          Available Service on {format(selected, "PP")}
        </h1>
      </div>
      <div className="mx-auto mt-8 grid w-[90%] grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {services?.map((service) => {
          return (
            <>
              <div
                key={service._id}
                className=" flex flex-col items-center bg-bg-box py-12 drop-shadow-md"
              >
                <p className="mb-2 font-b text-2xl font-bold text-text">
                  {service.name}
                </p>
                <img className="h-[60px] w-[60px]" src={img} alt="" />
                <p className="mt-2 font-b text-xl font-bold text-text">{`${
                  service.slots.length > 0
                    ? `Available Slots:${service.slots.length}`
                    : "No Slots available"
                }`}</p>
                <label
                  disabled={service.slots.length === 0}
                  className="btn-primary btn mt-2 border-none bg-gradient-primary text-white"
                  htmlFor="booking"
                  onClick={() => {
                    setTreatment(service);
                    setSucess(false);
                  }}
                >
                  BOOK APPOINTMENT
                </label>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableService;
