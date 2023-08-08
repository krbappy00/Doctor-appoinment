/* eslint-disable no-undef */
import { format } from "date-fns";
import { useContext } from "react";
import svg from '../../../assets/Appointment banner/success.svg'
import { AuthContext } from "../../../context/authProvider";
import axios from "axios";
import toast from "react-hot-toast";



const BookingModal = ({ treatment, selected, sucess, setSucess, refetch }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const bookingOrder = {
      appointmentDate: format(selected, "PP"),
      serviceName: treatment.name,
      patientName: name,
      slot,
      email,
      phone,
    };
    axios
      .post("http://localhost:5000/api/bookings", bookingOrder)
      .then((res) => {
        if(res.data.message){
          toast.error(res.data.message)
          setSucess(false)
        }
        else{
          console.log(res);
          setSucess(true);
          refetch();
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {sucess ? (
            <>
              <div className="p-8">
                <div>
                  <h1 className="mb-8 mt-2 text-center text-2xl text-text">
                    Thank you! Your booking is confirmed
                  </h1>
                  <img src={svg} alt="" />
                </div>
                <div className="modal-action flex justify-center">
                  <label
                    htmlFor="booking"
                    className="btn-primary btn mt-4 border-none bg-gradient-primary text-white"
                  >
                    Close!
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <form action="" onSubmit={handleSubmit}>
                <h3 className="mb-4 text-center text-xl font-bold text-text">
                  {treatment?.name}
                </h3>
                <h3 className="mb-2 text-lg font-bold text-text">
                  Selected date for appointment:{" "}
                  <span className="text-bg">{format(selected, "PP")}</span>{" "}
                </h3>
                <input
                  name="date"
                  defaultValue={format(selected, "PP")}
                  readOnly
                  className="mb-6 block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm text-text outline-none focus:border-bg focus:ring-bg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  type="text"
                />
                <select
                  name="slot"
                  id="default"
                  className="mb-6 block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm text-text outline-none focus:border-bg focus:ring-bg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option disabled className="">
                    Choose a time slot
                  </option>
                  {treatment?.slots.map((slot, i) => (
                    <>
                      <option className="" key={i}>
                        {slot}
                      </option>
                    </>
                  ))}
                </select>

                <input
                  name="name"
                  required
                  defaultValue={user?.displayName}
                  className="mb-6 block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm text-text outline-none focus:border-bg focus:ring-bg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  type="text"
                  placeholder="Full name"
                />

                <input
                  required
                  defaultValue={user?.email}
                  name="email"
                  className="mb-6 block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm text-text outline-none focus:border-bg focus:ring-bg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  type="email"
                  placeholder="Email"
                />
                <input
                  required
                  name="phone"
                  className="mb-6 block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm text-text outline-none focus:border-bg focus:ring-bg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  type="number"
                  placeholder="Phone number"
                />

                <div className="modal-action flex justify-between">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-lg bg-gradient-primary px-2 py-0 font-a text-lg text-white"
                  >
                    BOOK NOW
                  </button>
                  <label htmlFor="booking" className="btn">
                    Close!
                  </label>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
