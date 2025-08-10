import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Aniket👋🏻</span></h1>
      <button className="bg-red-600 px-5 py-2 text-center rounded-3xl font-medium">Log Out</button>
    </div>
  );
};

export default Header;
