import React from "react";
import Robot from "../../assets/About/robot.png";
import Header from "../../components/Header";

const About = () => {
  return (
    <div id="about" className="overflow-hidden min-h-[100vh]">
      <Header text={"About"} />

      {/* <motion.h1
        ref={ref}
        initial={{ x: -400 }} // Initial position (off-screen to the left)
        animate={{ x: inView ? 0 : -100 }} // Target position (move to the center)
        transition={{ type: "spring", stiffness: 50 }}
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mt-12 text-4xl text-center font-extrabold leading-none tracking-tight  md:text-3xl lg:text-5xl "
      >
        About Us
      </motion.h1> */}

      <section class="">
        <div className="flex flex-col md:flex-row justify-center items-center  container md:px-28 md:h-[90vh] gap-20">
          <div className="p-6 z-10">
            <p class="mb-3 text-lg md:text-2xl text-white">
              In the rapidly evolving landscape of modern technology, Robotics
              and Artificial Intelligence (AI) stand out. They've made
              significant advancements, revolutionizing industries and
              human-machine interaction.
            </p>
            <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
              <p class="mb-3 text-lg md:text-2xl text-white">
                Combining Robotics with AI is a growing interest in engineering.
                Robotics focuses on designing, building, and using robots to
                enhance efficiency and support humans. This event aims to
                inspire innovation in Robotics and AI.
              </p>
              <blockquote class="flex items-center mb-3">
                <p class="text-2xl italic font-semibold text-white">
                  " Small-scale robots require precise execution and safety
                  measures. The competition provides Indian students a platform
                  to showcase their talents and critical thinking. "
                </p>
              </blockquote>
            </div>
            <p class="mb-3 text-lg md:text-2xl text-white">
              The competition consists of four parts: One Static and Three
              Dynamic rounds, awarding points toward a grand total. Technical
              inspection ensures fair play and rule compliance. The participant
              with the highest grand total wins the competition.
            </p>
          </div>

          <img
            src={Robot}
            style={{ boxShadow: "inset 0px 0px 2px 2px #888888;" }}
            className=" md:w-[25vw] absolute  opacity-50  md:static inset-color"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
