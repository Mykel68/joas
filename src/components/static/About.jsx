"use client";

import React from "react";
import coins from "@/components/animinations/coins.json";
import bitcoin from "@/components/animinations/bitcoin.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        <div className="conatiner mx-auto pe-4 ">
          <div className="flex">
            <div
              style={{ minWidth: "400px", height: "200px", marginTop: "-70px" }}
            >
              <Lottie animationData={coins} loop={true} />
            </div>

            <div className="">
              <p className="text-2xl mb-4">
                Welcome to our Crypto Trading Platform. We are a team of
                experienced crypto enthusiasts who are dedicated to providing
                you with the best trading experience.
              </p>
              <p className="text-2xl">
                Our platform is designed to be user-friendly and intuitive,
                making it easy for you to trade your favorite crypto assets with
                confidence.
              </p>
            </div>
            <Lottie animationData={bitcoin} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
