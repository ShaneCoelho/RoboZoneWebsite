import React from "react";
import Background from "../../assets/Registration/bg.png";
import ToolTip from "../../assets/Rules/tool-tip2.png";
import Header from "../../components/Header";

import "./Registration.css";

const Registration = () => {
  return (
    <div
      id="registration"
      className="registration-bg h-screen overflow-hidden pt-4 "
    >
      <Header text={"Registration"} />

      <div className="pt-20 px-5 min-h-[100vh]  container md:px-28">
        <div className="py-4">
          <div className="flex items-start gap-2">
            <img className="w-[3rem]" src={ToolTip} />
            <p class=" text-xl md:text-3xl font-bold tracking-tighter  text-white">
              Early Bird Offer: ₹ 1000/-
            </p>
          </div>
          <p class="mb-3 pl-14  text-lg md:text-xl text-white">
            (Valid till 20th August 2023)
          </p>
        </div>

        <div className="py-4">
          <div className="flex items-start gap-2">
            <img className="w-[3rem]" src={ToolTip} />
            <p class=" text-xl md:text-3xl font-bold tracking-tighter  text-white">
              After 20th Registrations will be: ₹1250/-
            </p>
          </div>
        </div>

        <div className="pb-4 relative pt-48 md:pt-16">
          <div className="flex items-start gap-2">
            <img className="w-[3rem]" src={ToolTip} />
            <p class=" text-xl md:text-3xl  tracking-tighter  text-blue-500">
              Note: Last date of registration is <br /> 7th September 2023
            </p>
          </div>
        </div>

        <a href="https://forms.gle/JD9ParVmDW1Zjd9UA" target="blank">
          <button class=" w-[90vw] md:w-[37vw] mt-6 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-5  py-3 text-center mr-2 mb-2 ">
            Click here to Register Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Registration;
