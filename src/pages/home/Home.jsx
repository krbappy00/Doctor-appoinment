import Service from "../service/Service";
import ContactUs from "./ContactUs/ContactUs";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import Banner from "./banner/Banner";
import BannerText from "./banner/BannerText";
import Care from "./care/care";
import Info from "./info/Info";

const Home = () => {
  return (
    <div >
      <div className="mx-auto  w-[90%]">
        <div className="mt-8  md:flex md:items-center md:justify-between md:gap-16 mb-36">
          <div className="md:mt-20 md:w-[40%] ">
            <Banner></Banner>
          </div>
          <div className="text-justify md:w-[50%]">
            <BannerText></BannerText>
          </div>
        </div>
        <Info></Info>
        <Service></Service>
        <div className="w-[100%] md:gap-24 mb-24 mt-12 md:flex md:items-center md:justify-center">
          <div className="md:w-[50%]">
            <Care></Care>
          </div>
          <div className=" md:w-[40%]">
            <h1 className="text-justify font-b text-text md:text-justify">
              Exceptional Dental Care
            </h1>
            <p className="mb-4 mt-4 text-justify font-b text-text">
              A healthy mouth, free of infections, injuries and other problems
              with teeth and gums, is important in maintaining your overall
              health. Although a different set of medical professionals focuses
              on dental health, they are still part of your regular health care
              team. Disease and other conditions can affect your dental health
              and dental problems can affect other parts of your body. Failing
              to properly care for your oral health may lead to other health
              problems. You can help prevent or preventive steps (brushing,
              flossing and so on) and regular visits to dental health
              professionals.
            </p>
            <button className="text-semibold rounded-lg bg-gradient-primary p-4 font-a text-white">
              FIND DOCTOR
            </button>
          </div>
        </div>
      </div>
      <MakeAppointment />
      <Testimonial/>
      <ContactUs/>
    </div>
  );
};

export default Home;