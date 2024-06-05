"use client";

import React from "react";

import { companies } from "@/data";

const TechStack = () => {
  return (
    <section id="techstack" className="py-20">
      <h1 className="heading">
        Technologies I {""}
        <span className="text-purple">Use </span>
      </h1>

      <div className="flex  pt-10 flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="sm:w-19 md:w-19 w-14" // Adjusted width for larger image
                />
                {/* You can uncomment and adjust the size for the second image if needed */}
                {/* <img
    src={company.nameImg}
    alt={company.name}
    width={company.id === 4 || company.id === 5 ? 100 : 150}
    className="md:w-24 w-20"
  /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
