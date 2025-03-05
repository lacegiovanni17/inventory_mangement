"use client";

import { Menu } from "lucide-react";
import React from "react";

const SideBar = () => {

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* TOP LOGO  */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">StockUp</h1>
      <button className="md:hidden px-3 px-y bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
        <Menu className="w-4 h-4" />
      </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        {/* links here */}
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm text-gray-500 mt-8">
      <p>&copy; {currentYear} StockUp</p>
      </div>
    </div>
  );
};

export default SideBar;
