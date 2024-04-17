"use client";
import React from "react";
import Bitcoin from "@/components/animinations/bitcoin_spining.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-[#1C2833] to-[#273746]">
      <div className="hero-content flex-col lg:flex-row-reverse px-6 lg:px-0">
        <div
          className={`pb-10 w-full lg:w-auto ${
            window.matchMedia("(min-width: 768px) and (max-width: 1023px)")
              .matches
              ? "mt-0"
              : "mt-[-300px]"
          }`}
          style={{ minWidth: "500px", height: "300px" }}
        >
          <Lottie animationData={Bitcoin} loop={true} />
        </div>
        <div className="text-white w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-wrap leading-tight text-white">
            Unlock the Power of Crypto Trading with Our Expert-Curated Platform
          </h1>
          <p className="py-6 text-lg lg:text-xl text-gray-300">
            Start selling your crypto assets through our secure and reliable
            platform, backed by industry experts. Join the future of
            decentralized finance today.
          </p>
          <button className="btn btn-primary bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-3 px-8 rounded-full w-full lg:w-auto">
            Start Selling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
