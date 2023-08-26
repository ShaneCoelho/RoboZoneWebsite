import React from "react";
import "./Enquiries.css";

import Phone from "../../assets/contact/Phone_icon.png";
import Logo from "../../assets/Hero/logo.png";

const Enquiries = () => {
  return (
    <div
      id="contact"
      className="enquires-bg h-screen flex items-center justify-center"
    >
      <div class="w-[80vw]  h-[60vh] p-4 text-center  border bg-black bg-opacity-25 rounded-lg shadow sm:p-8 border-gray-700">
        <div className=" mb-2 md:w-[20vw] p-4 rounded-xl text-3xl font-bold text-white bg-slate-700">
          For Any Queries
        </div>

        <div className="flex gap-2 items-start py-2 ">
          <img src={Phone} className=" w-[2.2rem]  md:w-[3rem]" />

          <div className="flex flex-col items-start">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl  md:text-2xl font-bold ">
              Divyesh Panchal{" "}
            </h2>

            <h2 className=" text-xl  md:text-2xl tracking-tight text-white">
              {" "}
              7977712825{" "}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-start py-2 ">
          <img src={Phone} className=" w-[2.2rem]  md:w-[3rem]" />

          <div className="flex flex-col items-start">
            <h2 className=" text-2xl  md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              ANISH KARBHARI{" "}
            </h2>

            <h2 className=" text-xl  md:text-2xl tracking-tight text-white">
              {" "}
              9969773499{" "}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-start py-2 ">
          <img src={Phone} className=" w-[2.2rem]  md:w-[3rem]" />

          <div className="flex flex-col items-start">
            <h2 className="text-xl  md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              JONATHAN SEQUEIRA{" "}
            </h2>

            <h2 className=" text-xl  md:text-2xl tracking-tight text-white">
              {" "}
              8454056742{" "}
            </h2>
          </div>
        </div>

        <div className="flex gap-2 items-start py-2 ">
          <img src={Phone} className=" w-[2.2rem]  md:w-[3rem]" />

          <div className="flex flex-col items-start">
            <h2 className=" text-2xl  md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              NATHAN JOSEPH{" "}
            </h2>

            <h2 className=" text-xl  md:text-2xl tracking-tight text-white">
              {" "}
              8169003557{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;
