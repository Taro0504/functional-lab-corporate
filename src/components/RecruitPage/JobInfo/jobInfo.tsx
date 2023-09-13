// Gatsby.js + Tailwind CSS + TypeScript
import React from "react";
import JobDescription from "./contents/jobDescription";
import Recruitment from "./contents/recruitment";
import Location from "./contents/location";
import Employment from "./contents/employment";
import Salary from "./contents/salary";
import Welfare from "./contents/welfare";
import Vacation from "./contents/vacation";
import SalaryTable from "./contents/salaryTable";

const JobInfo: React.FC = () => {
  return (
    <section id="p-job-info" className="bg-gradient-to-l from-sub to-main p-section">
      <div className="max-w-[1300px] mx-auto">
        <div className="pb-[12vw]">
          <h2 className="text-base text-[11.1vw] font-bold text-center pt-[7.4vw]">Job Information</h2>
          <h3 className="text-base relative text-[6.1vw] font-semibold pb-[2.8vw] mt-[7.4vw] ml-[17.6vw]">募集要項</h3>
          <div className="relative px-[5.5vw] mt-[4vw] text-[3.15vw] bg-base p-job-info__bg--right">
            <div className="px-[10%]">
              <JobDescription />
              <Recruitment />
              <Location />
              <Employment />
              <Salary />
              <Welfare />
              <Vacation />
              <SalaryTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobInfo;
