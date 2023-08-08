import { useTypewriter, Cursor } from "react-simple-typewriter";
const BannerText = () => {
    const [text] = useTypewriter({
      words: ["Starts Here..."],
      loop: true,
    });

    return (
      <>
        <div className="w-[100%] mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl text-text font-a">
            Your New Smile <br />
            <span className="text-4xl md:text-5xl text-bg font-a">{text}</span>
            <span className="text-5xl md:text-6xl">
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <div className="mt-8 font-b">
            <p className="text-xl text-text">
              What do hospital dental facilities do? A hospital dental practice
              is a specialized dental facility that can provide pediatric,
              restorative, and orthodontic treatments. We can work with other
              medical professionals to help ensure children receive the proper
              care they need.
            </p>
          </div>
          <div className="">
            <button className="bg-gradient-primary p-4 mt-4 text-semibold font-a text-white rounded-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </>
    );
    

};

export default BannerText;
