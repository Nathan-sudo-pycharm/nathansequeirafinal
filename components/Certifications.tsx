"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

export function Certifications() {
  return (
    <div className="py-20 " id="certifications">
      <h1 className="heading ">
        Some of My <span className="text-purple">Certifications</span>
      </h1>
      <div className="flex  flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-black-100 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#FCCB06]">
                Flutter & Dart - The Complete Guide [2024 Edition]
              </h2>
              <p className="mt-4 text-left  text-base/6 text-[#CA2C92]">
                Course Completed on Udemy{" "}
              </p>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Instructor : Academind by Maximilian Schwarzmüller{" "}
              </p>
            </div>
            <Image
              src="/flutter.png"
              width={500}
              height={500}
              alt="Flutter Image"
              className="absolute -right-4 lg:-right-[0%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#FFFDD0]">
              Other Certificates Gained or Awarded in College:
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Certificate of Appreciation , Certificate of Excellence ,
              Certificate of Participation.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black-100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-green-500">
                Honeywell CyberSecurity Trainng
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Learnings: Gained proficiency in operating a firewall, and
                acquired knowledge about various types of cyber attacks along
                with strategies to prevent them.
              </p>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Completed at St. Aloysius College (Autonomous)
              </p>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Training provided by Honeywell and Palo Alto Networks.
              </p>
            </div>
            <Image
              src="/paloalto.jpeg"
              width={500}
              height={500}
              alt="CyberSec"
              className="absolute -right-10 md:-right-[0%] lg:-right-[0%] -bottom-20 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
