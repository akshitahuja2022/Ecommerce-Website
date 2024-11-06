import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-1 w-36" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod harum
            blanditiis asperiores accusantium aperiam quo. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptate unde repudiandae eaque
            laborum excepturi dolores!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-4">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-3435</li>
            <li>contact@ecofashion.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-md text-center">
          Copyright 2024@ EcoFashion.com- All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
