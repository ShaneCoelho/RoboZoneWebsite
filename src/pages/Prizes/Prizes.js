import React from "react";
import Gold from "../../assets/Prizes/gold.png";
import Silver from "../../assets/Prizes/12-1@2x.png";
import Bronze from "../../assets/Prizes/13-1@2x.png";
import Header from "../../components/Header";

const Prizes = () => {
  return (
    <div className="overflow-hidden">
      <Header text={"Prizes"} />  

      <div className="flex py-20 md:py-0 flex-col  md:flex-row justify-center items-center min-h-[100vh]  container md:px-28 gap-20">
        <div
          style={{
            boxShadow:
              "1px 34px 153px 24px rgba(41,122,184,0.5), 0px 35px 22px 0px rgba(0,0,0,0.16)",
          }}
          className="transition-all hover:scale-110 flex flex-col pb-10 items-center justify-center w-[20rem] rounded-3xl h-[20rem] border-4 border-white"
        >
          <img className="relative w-[10rem] m-auto bottom-16" src={Silver} />
          <h2 class="text-4xl font-extrabold text-white">₹10,000</h2>

          <h2 class="text-4xl  text-white">1st Runner Up</h2>
        </div>

        <div
          style={{
            boxShadow:
              "1px 34px 153px 24px rgba(41,122,184,0.5), 0px 35px 22px 0px rgba(0,0,0,0.16)",
          }}
          className="transition-all hover:scale-110 flex flex-col pb-10 items-center justify-center w-[20rem] rounded-3xl h-[20rem] border-4 border-white"
        >
          <img className="relative m-auto bottom-16" src={Gold} />
          <h2 class="text-4xl font-extrabold text-white">₹15,000</h2>

          <h2 class="text-4xl  text-white">Winner</h2>
        </div>

        <div
          style={{
            boxShadow:
              "1px 34px 153px 24px rgba(41,122,184,0.5), 0px 35px 22px 0px rgba(0,0,0,0.16)",
          }}
          className="transition-all hover:scale-110 flex flex-col pb-10 items-center justify-center w-[20rem] rounded-3xl h-[20rem] border-4 border-white"
        >
          <img className="relative m-auto w-[10rem] bottom-16" src={Bronze} />
          <h2 class="text-4xl font-extrabold text-white">₹5,000</h2>

          <h2 class="text-4xl  text-white">2nd Runner Up</h2>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
