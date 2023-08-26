import React from "react";
import Box from "../../assets/Dimension/box.png";
import Figure from "../../assets/Dimension/object.png";
import ToolTip from "../../assets/Registration/tool-tip.png";
import Header from "../../components/Header";

const Dimension = () => {
  return (
    <div id="dimensions" className="overflow-hidden">
      <Header text={"Robot Dimension Requirements"} />
      <div className="flex flex-col md:flex-row justify-center items-center  container px-5 md:px-28 min-h-[90vh] md:gap-20">
        <div className="w-[80vw] md:w-[90vw] py-5 ">
          <div className="w-[80vw] md:w-[26vw] rounded-3xl    overflow-hidden ">
            <img src={Box} className="transition-all hover:scale-105" />
          </div>
          <h1 className="text-lg md:text-2xl  text-center pt-5 font-bold  text-blue-600">
            Image depicting robot dimensions.
          </h1>
        </div>
        <ul className="p-6 z-10">
          <li class="mb-4 text-lg md:text-2xl text-white list-disc">
            Fully configured and assembled for the competition, the
            free-standing robot unaided by any external support shall have a
            maximum dimension of 150 x 150 x 80 mm (L x B x H).
          </li>

          <li class="mb-4 text-lg md:text-2xl text-white list-disc">
            Any robot exceeding the specified dimension will be penalized or
            disqualified based on the judge’s decision.
          </li>

          <li class="mb-4 text-lg md:text-2xl text-white list-disc">
            Length and Breadth is defined as the maximum distance between the
            two extreme ends of the robot in the longitudinal and lateral
            directions, and Height is defined as the maximum distance from the
            base to the highest part of the robot.
          </li>
        </ul>
      </div>

      <div id="objectives"></div>

      <Header text={"Competition Objective and Format"} />

      <div className="px-5 md:px-28">
        <p class="pt-16 pb-8 mb-3 text-lg md:text-2xl text-white">
          There will be a total of 3 rounds. At the end of each successive
          round, the robot will be awarded points or penalties based on their
          performance. The objectives of each round are as follows
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <ul className="md:pt-6 z-10">
            <li class="mb-4 text-lg md:w-[22vw] md:text-2xl text-white ">
              1) Round one will consist of a series of line(s) that the robot
              will have to navigate through to get from the starting block to
              the goal/end block. The time taken by the robot to complete this
              round will be the criteria on which points will be awarded.
            </li>
          </ul>
          <div className="w-[80vw] md:w-[18vw] py-5 ">
            <img src={Figure} className=" " />
          </div>
        </div>

        <p class="py-8 mb-3 text-lg md:text-2xl text-white">
          2) Round two will consist of a series of line(s) (resembling a maze)
          that the robot will have to successfully navigate through without
          crashing into the obstacle/wall placed. Failing to do so will result
          in penalties or elimination based on the decision of the judges. The
          time taken by the robot to complete this round will be the criteria on
          which points/penalties will be awarded. There will be three (3) test
          runs and three (3) attempts for this round. The smallest of the 3
          recorded time during the three (3) attempts will be considered.
        </p>

        <p class="mb-3 text-lg md:text-2xl text-white">
          3) Round three will consist of a series of line(s) arranged in loops
          that the robot will successfully have to navigate through without
          entering into and staying in a loop. In case a robot does get stuck in
          a loop, the participant will be allowed to manually pick up the robot
          and place it at a designated way point/spot. However, a time penalty
          of 20% of the total run time will be awarded. The time taken by the
          robot to complete this round will be the criteria on which
          points/penalties will be awarded. If the robot is unable to
          successfully navigate through the round, penalties or elimination
          based on the decision of the judges will be awarded. There will be
          three (3) test runs and three (3) attempts for this round. The
          smallest of the 3 recorded time during the three (3) attempts will be
          considered.
        </p>

        <div className="py-8 flex items-center gap-2">
          <img className="w-[3rem]" src={ToolTip} />
          <p class=" text-xl md:text-3xl font-bold tracking-tighter  text-white">
            The pattern for the Second and Third round will be revealed on the
            day of the competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dimension;
