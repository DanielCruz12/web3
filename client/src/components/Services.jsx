import React from "react";
import { CgCreditCard } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover translate-x-2">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h2 className="mt-2 text-white text-lg">{title}</h2>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-5 ">
          Get a loan
          <br />
          for your company.
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">We provide open access to marketplace and lending services, in which investors can fund lending pools.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center" id="Card">
        <ServiceCard
          color="bg-[#acb7ae]"
          title="faster and safer credits"
          icon={<CgCreditCard fontSize={21} className="text-white" />}
          subtitle="This platform promotes great financial practices to get a loan."
        />
        <ServiceCard
          color="bg-[#23B2EE]"
          title="Job creation"
          icon={<BsPeople fontSize={21} className="text-white" />}
          subtitle="have an online marketplace platform to commercialize their products."
        />
        <ServiceCard
          color="bg-[#3fb0ac]"
          title="Fastest transactions"
          icon={<AiOutlineFieldTime fontSize={21} className="text-white" />}
          subtitle="We promote great financial practices. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
