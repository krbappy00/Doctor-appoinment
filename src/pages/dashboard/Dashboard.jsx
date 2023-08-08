import axios from "axios";
import { useEffect,useState } from "react";
import appointmentImg from '../../assets/dashboard/Appointment.png'
import patient from '../../assets/dashboard/patient.png'
import service from '../../assets/dashboard/service.png'
import { PieChart } from "react-minimal-pie-chart";
import LineGraph from "react-line-graph";



const Dashboard = () => {
    const [totalPatient,setTotalPatient] = useState(0);
    const [totalBooking,setTotalBooking] = useState(0);
    const [totalService,setTotalService] = useState(0);
    const data = [350,258,265, 150, 75, 540];
    const props = {
      data,
      smoothing: 0.5,
      accent: "#3A4256",
      fillBelow: "#00ADB5",
      hover: true,
      
    };

    useEffect(()=>{
      axios.get("http://localhost:5000/api/count")
      .then(res=>{
        const data = res.data
        setTotalBooking(data.totalBooking);
        setTotalPatient(data.totalPatient);
        setTotalService(data.totalService);
      })
    },[])
    
    return (
      <div className="mx-auto mt-12 w-[90%]">
        <div className="flex w-full justify-between gap-20">
          <div className="w-full rounded-md bg-gray-200  p-8">
            <div className="flex gap-4">
              <img src={appointmentImg} alt="" />
              <p className="text-[45px] font-bold text-text">{totalBooking}</p>
            </div>
            <div className="mt-4 h-[7px] w-full rounded-full bg-gray-300">
              <div className="h-[7px] w-[75%] rounded-full bg-[#FFBC34]"></div>
            </div>
            <p className="mt-2 text-xl font-semibold text-text">
              Total Booking
            </p>
          </div>
          <div className="w-full rounded-md bg-gray-200 p-8">
            <div className="flex gap-4">
              <img src={patient} alt="" />
              <p className="text-[45px] font-bold text-text">{totalPatient}</p>
            </div>
            <div className="mt-4 h-[7px] w-full rounded-full bg-gray-300">
              <div className="h-[7px] w-[65%] rounded-full bg-[#7BB13C]"></div>
            </div>
            <p className="mt-2 text-xl font-semibold text-text">
              Total Patient
            </p>
          </div>
          <div className="w-full rounded-md bg-gray-200 p-8">
            <div className="flex gap-4">
              <img src={service} alt="" />
              <p className="text-[45px] font-bold text-text">{totalService}</p>
            </div>
            <div className="mt-4 h-[7px] w-full rounded-full bg-gray-300">
              <div className="h-[7px] w-[45%] rounded-full bg-[#FF0034]"></div>
            </div>
            <p className="mt-2 text-xl font-semibold text-text">
              Total Service
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-between gap-12">
          <div className="h-full w-full rounded-md bg-gray-200 p-8">
            <div>
              <p className="mt-2 text-xl font-semibold text-text">
                Appointment Chart
              </p>
              <div className="mt-4 h-[5px] w-full rounded-full bg-gray-300"></div>
            </div>
            <div className="mx-auto mt-8 w-[100%]">
              <LineGraph {...props} data={data} />
            </div>
          </div>
          <div className="h-full w-full rounded-md bg-gray-200 p-8">
            <div>
              <p className="mt-2 text-xl font-semibold text-text">Percentage</p>
              <div className="mt-4 h-[5px] w-full rounded-full bg-gray-300"></div>
            </div>
            <div className="mx-auto mt-8 w-[60%]">
              <PieChart
                data={[
                  { title: "One", value: totalBooking, color: "#FFBC34" },
                  { title: "Two", value: totalPatient, color: "#7BB13C" },
                  { title: "Three", value: totalService, color: "#FF0034" },
                ]}
                label={({ dataEntry }) =>
                  `${Math.round(dataEntry.percentage)} %`
                }
                labelStyle={{
                  fontSize: "8px",
                  fontFamily: "sans-serif",
                  fill: "#3A4256",
                }}
                labelPosition={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;