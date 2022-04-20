import React from "react";

import logo from "../../images/graphi.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://lappsnet.surge.sh/" className="text-white text-base text-center mx-2 cursor-pointer">MarketPlace</a>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <a href="https://lappsnet.surge.sh/" className="text-white text-base text-center mx-2 cursor-pointer">Get a loan</a>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">The best to get a loan or buy any thing here.</p>
      <p className="text-white text-sm text-center font-medium mt-2">thecfour023@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-center text-xs">@TurnBlock2022</p>
      <p className="text-white text-center text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
