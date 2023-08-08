import i1 from '../../../src/assets/icon-service/cavity 1.svg'
import i2 from '../../../src/assets/icon-service/fluoride 1.svg'
import i3 from '../../../src/assets/icon-service/whitening 1.svg'

const Service = () => {
    return (
      <div className="mt-32">
        <div className="w-[100%] font-b mb-16">
          <p className="text-center text-2xl font-semibold text-bg">
            OUR SERVICES
          </p>
          <h1 className="text-center font-b text-text">Services We Provide</h1>
        </div>
        <div className="md:flex md:justify-between">
          <div className=" flex flex-col items-center justify-center text-text md:w-[30%]">
            <img className="" src={i1} alt="" />
            <h1 className="font-b text-center mt-8 mb-4 text-text ">
              Cavity Filling 
            </h1>
            <p className="font-b text-text text-center mb-4">
              Having a cavity filled may cause some discomfort, but it should
              not cause pain. Anyone who experiences moderate or severe pain
              during.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center text-text md:w-[30%]">
            <img className="text-center" src={i2} alt="" />
            <h1 className="font-b mt-8 mb-4 text-text text-center">
              Fluoride Treatment
            </h1>
            <p className="font-b text-text  text-center mb-4">
              Fluoride is a natural mineral that builds strong teeth and
              prevents cavities. It’s been an essential oral health treatment
              for decades.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center text-text mt-4 md:w-[30%]">
            <img className="" src={i3} alt="" />
            <h1 className="font-b mt-8 mb-4 text-text text-center">
              Teeth Whitening
            </h1>
            <p className="font-b text-text text-center">
              If you are dissatisfied with your smile because of discolored,
              dull teeth, ZOOM! Teeth Whitening may be the right choice for you.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Service;