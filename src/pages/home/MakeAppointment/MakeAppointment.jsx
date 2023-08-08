
import bg from '../../../assets/bg-blue-desk.png'
import bgSm from '../../../assets/bg-blue 1.png'
import men from '../../../assets/doctor-small.png'


const MakeAppointment = () => {
    return (
      <div className="mb-36">
        <div>
          <div className="relative mt-8 hidden  w-[100%] md:block">
            <img className="absolute bottom-0 left-[15%]" src={men} alt="" />
            <img className="h-[550px] w-[100%] " src={bg} alt="" />
            <div className="absolute top-[14%] right-[10%] flex w-[40%] flex-col p-4">
              <p className="font-a text-xl font-bold text-bg ">Appointment</p>
              <h1 className="mt-2 font-b text-4xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p className="mt-4 text-justify font-b text-white">
                Coverage Following the Termination of Extended Health and Dental
                Care BenefitsIf your extended health and/or dental care coverage
                terminates for any reason, including termination of your
                employment or retirement, you and your dependants may be
                eligible for similar coverage under an individual policy without
                providing evidence of insurability.Dental care means the
                diagnosis, treatment planning, and implementation of services
                directed at the prevention and treatment of disease, conditions,
                and dysfunctions relating to the oral cavity and its associated
                structures and their impact on the human body or the
                implementation of professional dental care provided to dental
                patients by a legally qualified dentist or Physician operating
                within the scope of the dentist’s or Physician’s training and
                licensure.
              </p>
              <button className="text-semibold mt-8 w-[200px] rounded-lg bg-gradient-primary p-4 font-b font-bold text-white">
                GET APPOINTMENT
              </button>
            </div>
          </div>
          <div className="relative mt-8 w-[100%] md:hidden">
            <img className="w-[100%]" src={bgSm} alt="" />
            <div className="absolute top-0 flex flex-col p-4">
              <p className="font-a text-xl font-bold text-bg ">Appointment</p>
              <h1 className="mt-4 font-b text-4xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p className="mt-4 text-justify font-b text-white">
                Coverage Following the Termination of Extended Health and Dental
                Care BenefitsIf your extended health and/or dental care coverage
                terminates for any reason, including termination of your
                employment or retirement, you and your dependants may be
                eligible for similar coverage under an individual policy without
                providing evidence of insurability.
              </p>
              <button className="text-semibold mt-8 w-[200px] rounded-lg bg-gradient-primary p-4 font-b font-bold text-white">
                GET APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;