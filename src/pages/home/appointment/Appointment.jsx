import { format } from "date-fns";
import { useState } from "react";
import "react-day-picker/dist/style.css";
import banner from "../../../assets/Appointment banner/banner-01.svg"
import Calendar from "./Calendar";
import AvailableService from "./AvailableService";


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
      <>
        <div className="mx-auto mb-12 mt-8 w-[100%] items-center justify-center gap-32 sm:flex md:flex md:w-[65%] lg:flex lg:w-[65%] ">
          <div>
            <Calendar selected={selected} setSelected={setSelected} />
          </div>
          <div className="hidden md:block lg:block">
            <img className="h-[600px]" src={banner} alt="" />
          </div>
        </div>
        <div>
          <AvailableService selected={selected}></AvailableService>
        </div>
      </>
    );
};

export default Appointment;