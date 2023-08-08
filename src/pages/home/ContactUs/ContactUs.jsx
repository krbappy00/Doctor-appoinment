import bgimg from '../../../assets/bg-blue-desk.png'
import bgSm from "../../../assets/bg-blue 1.png";


const ContactUs = () => {
    return (
      <div>
        <div className="relative w-screen">
          <div className="w-[100%]">
            <img className="hidden max-[640px]:block" src={bgSm} alt="" />
            <img
              className="hidden h-[600px] w-[100%] min-[640px]:block "
              src={bgimg}
              alt=""
            />
          </div>
          <div className=" absolute top-0 p-8 min-[640px]:absolute min-[640px]:right-[35%] min-[640px]:top-[3%]">
            <div className=" ">
              <div className="flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-bg">Contact us</p>
                <h1 className="max-[640px]:text-3xl">Stay Connected With Us</h1>
              </div>
              <div className="mt-8">
                <form action="">
                  <input
                    className="h-[40px] w-[100%] rounded-lg pl-2 outline-none min-[640px]:h-[50px]"
                    type="text"
                    placeholder="Email Address"
                  />
                  <input
                    className="mt-8 h-[40px] w-[100%] rounded-lg pl-2 outline-none min-[640px]:h-[50px]"
                    type="text"
                    placeholder="Subject"
                  />

                  <textarea
                    className="mt-8 w-[100%] rounded-lg pl-2 pt-2 outline-none min-[640px]:h-[140px]"
                    type="text"
                    placeholder="Enter your text"
                    name=""
                    id=""
                  ></textarea>
                  <div className="flex w-[100%] justify-center">
                    <button className="text-semibold mt-4 rounded-lg bg-gradient-primary p-4 font-a text-white">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;