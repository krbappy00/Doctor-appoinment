

const Footer = () => {
    return (
      <div className="w-[100%] bg-bg-footer text-text">
        <div className="">
          <div className="mb-8 p-12 min-[640px]:flex min-[640px]:justify-around">
            <div className="font-b mb-4">
              <h2 className="text-2xl text-[#939393]">SERVICE</h2>
              <p className="mt-2 text-text">
                Emergency Checkup <br />
                Monthly Checkup <br />
                Weekly Checkup <br />
                Deep Checkup <br />
              </p>
            </div>
            <div className="font-b mb-4">
              <h2 className="text-2xl text-[#939393]">ORAL HEALTH</h2>
              <p className="mt-2 text-text">
                Cavity Filling
                <br />
                Fluoride Treatment <br />
                Teeth Whitening <br />
                Teeth Brace <br />
              </p>
            </div>
            <div className="font-b">
              <h2 className="text-2xl text-[#939393]">ADDRESS</h2>
              <p className="mt-2 text-text">New York,1526, Hudson Area.</p>
            </div>
          </div>
          <p className="mb-2 text-center text-text">
            Copyright 2022 All Rights Reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;