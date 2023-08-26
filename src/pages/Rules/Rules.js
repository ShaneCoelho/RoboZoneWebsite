import React from "react";
import Header from "../../components/Header";
import ToolTip from "../../assets/Rules/tool-tip2.png";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import "./Rules.css";

const data = [
  {
    header: "PARTICIPATING IN THE COMPETITION",
    content:
      "Participation will be allowed either as an individual candidate or a team comprising of minimum two (2) to maximum eight (8) members representing an institute.",
  },

  {
    header: "COMPREHENDING AND EXPLAINING RULES",
    content:
      "Participants and Teams are solely responsible for reading and interpreting the rules mentioned in this rule-book. Headings are provided to facilitate reading and do not in its entirety explain the details of the paragraph. Detailed information regarding the same is provided in the paragraph within the heading.",
  },
  {
    header: "VIOLATIONS OF THE RULEBOOK",
    content:
      "Violating the rules of the rule-book will be considered as resorting to unfair means resulting in foul play. Teams found to be violating the rules will be disqualified or penalized based on the decision of the judges. The Technical Committee will have the right to seize and impound the robot till the end of the competition in case of disqualification. The Judges and Technical Committee will have complete authority to modify points/penalties till the end of the competition if they deem it fit to be changed based on the factors influencing the decision. Participants can however appeal for/against the decisions.",
  },
  {
    header: "MAINTAINING THE DECORUM OF THE COMPETITION",
    content:
      "Unnecessary arguments and/or verbally or physically abusing the organizers is frowned upon and will attract direct disqualification. Taunting or physically abusing other team members will also be treated in the same manner. The participants are expected to raise issues/concerns/queries with the organizers in a respectful and professional manner.",
  },
  {
    header: "DOS AND DON’TS",
    content:
      "The Robot should be unmanned and must be operated unassisted. i.e., the robot should be completely automated. Use of an external controlling module, drone to map the playing field, external modules to map the playing field, changing codes/controllers after the Technical Inspection, clicking photos, and uploading it to the robot’s database is prohibited and will attract penalty or disqualification. The robot is prohibited from scratching/marking/burning/ damaging the playing field in any manner. The use of Artificial Intelligence is permitted at the participants’ discretion. Also, The Bot should not deviate from the line.",
  },
  {
    header: "TECHNICAL INSPECTION",
    content:
      "Technical Inspection will be held before the start of the competition. The components will be evaluated and inspected during the Technical Inspection round. The Technical Committee will have the authority to ask the teams to dismantle the robot to better evaluate the robot. However, teams will be given time to reassemble the robot. No Design Report or Technical Presentation will be required prior to the competition. The Participants will have to explain the design, electronic systems and algorithms implemented during the Technical Inspection round.",
  },
  {
    header: "SAFETY FACTOR",
    content:
      "The robot should be designed and fabricated in a way that does not damage the playing field in any manner. Any explosive component (Batteries, etc.) should be arranged in such a manner that in case of an accident leading to an explosion, the fire should be contained without causing significant damage to the robot as well as the surrounding. Use of blades, saws and/or any other cutting devices is strictly prohibited. However, devices whose sole purpose is to increase the efficiency of the robot will be permitted if the Technical Committee approves its use. Participants are encouraged to follow personal as well as competition declared safety rules.",
  },
  //   {
  //     header: "",
  //     content: "",
  //   },
];

const Paragraph = ({ header, text }) => {
  return (
    <div className="py-4">
      <div className="flex items-center gap-2">
        <img className="w-[3rem]" src={ToolTip} />

        <InView>
          {({ inView, ref }) => (
            <motion.p
              ref={ref}
              initial={{ opacity: 0, x: -20 }} // Initial opacity and position
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }} // Animate opacity and position based on inView
              transition={{ type: "spring", stiffness: 50 }}
              className="text-xl md:text-3xl font-bold tracking-tighter text-[#075985]"
            >
              {header}
            </motion.p>
          )}
        </InView>
      </div>
      <p class="mb-3 pl-14  text-lg md:text-xl text-white">{text}</p>
    </div>
  );
};

const Rules = () => {
  return (
    <div id="rules" className="overflow-hidden rules-bg">
      <Header text={"Rules and Regulations"} />

      <div className="pt-20 px-5 min-h-[100vh]  container md:px-28">
        {data.map((item, index) => {
          return <Paragraph text={item.content} header={item.header} />;
        })}
      </div>
    </div>
  );
};

export default Rules;
