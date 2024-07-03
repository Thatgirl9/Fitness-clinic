// import Woman from "../assets/image 1.png";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Woman from "../public/LadyExercising.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      className="text-text-secondary mt-[4em] lg:mt-[8em] scroll-m-24"
      id="home"
    >
      <div className="flex justify-center items-center lg:flex-row flex-col-reverse ">
        <div className="text-center lg:text-left">
          <h1 className="md:text-9xl text-6xl  font-extrabold mt-[-1em]">
            Cardio <br></br> Exercise
          </h1>
          <p className="md:text-base text-md font-normal mt-5 lg:w-[40ch] w-[90%] ">
            Cardio exercise is any exercise that raises your heart rate. Face
            it, it's hard to find time to exercise. But if you can't find time
            to go to the gym, you can still get in a good workout at home.
          </p>

          <button className="bg-green-primary text-bg-primary font-semibold text-lg rounded-lg mt-5 px-5 py-2 border-2 border-transparent hover:bg-transparent hover:text-text-secondary hover:border-green-primary ">
            <Link href="/signup">Get Started</Link>
          </button>
        </div>

        <Image src={Woman} alt="Lady Exercising" priority />
      </div>
    </section>
  );
};

export default Hero;
