import clock from '../../../assets/icon/clock.svg'
import place from '../../../assets/icon/placeicon.svg'
import location from '../../../assets/icon/locationicon.svg'


const Info = () => {
    return (
      <div className="w-full sm:w-full sm:mt-20 sm:mb-8 md:flex md:justify-between md:h-[190px] mt-20 mb-8 md:gap-32 ">
        <div className="bg-gradient-primary w-[100%] h-[100%] rounded-xl sm:bg-gradient-primary sm:w-[100%] sm:h-[100%] sm:rounded-xl mb-4  md:flex md:justify-center">
          <div className="flex justify-between items-center p-2 sm:flex sm:justify-between sm:items-center sm:p-2 md:flex md:gap-12">
            <div className="h-[190px] flex items-center">
              <img className="w-[100px] h-[100px] " src={clock} alt="" />
            </div>
            <div className="ml-4 w-[100%] text-text flex justify-center sm:ml-4 sm:w-[100%] sm:text-text sm:flex sm:justify-center md:ml-0 md:justify-start">
              <div className="flex justify-center flex-col sm:flex sm:justify-center sm:flex-col md:flex md:flex-col">
                <p className=" text-2xl font-b">
                  We are open <br />
                  <span className="text-2xl font-bold  text-b">
                    Monday-Friday
                  </span>
                </p>
                <p className=" text-2xl font-b font-bold">7:00 am - 9:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-primary w-[100%] h-[100%] rounded-xl sm:bg-gradient-primary sm:w-[100%] sm:h-[100%] sm:rounded-xl mb-4  md:flex md:justify-center">
          <div className="flex justify-between items-center p-2 sm:flex sm:justify-between sm:items-center sm:p-2 md:flex md:gap-12">
            <div className=" h-[190px] flex items-center">
              <img
                className="w-[100px] h-[100px] self-center"
                src={place}
                alt=""
              />
            </div>
            <div className="ml-4 w-[100%] text-text flex justify-center sm:ml-4 sm:w-[100%] sm:text-text sm:flex sm:justify-center md:ml-0 md:justify-start">
              <div className="flex justify-center flex-col sm:flex sm:justify-center sm:flex-col md:flex md:flex-col">
                <p className=" text-2xl font-b">Visit our location</p>
                <p className=" text-2xl font-b font-bold mt-2">
                  Brooklyn, NY 10036
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-primary w-[100%] h-[100%] rounded-xl sm:bg-gradient-primary sm:w-[100%] sm:h-[100%] sm:rounded-xl mb-4  md:flex md:justify-center">
          <div className="flex  items-center p-2 sm:flex gap-8 sm:items-center sm:p-2 md:flex md:gap-12">
            <div className="h-[190px] flex items-center">
              <img
                className="w-[100px] h-[100px] self-center"
                src={location}
                alt=""
              />
            </div>
            <div className="flex justify-center flex-col sm:flex sm:justify-center sm:flex-col md:flex md:flex-col">
              <div className="flex justify-center flex-col sm:flex sm:justify-center sm:flex-col md:flex md:flex-col">
                <p className=" text-2xl font-b">Contact Us Now</p>
                <p className=" text-2xl font-b font-bold mt-2">+881546846</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Info;