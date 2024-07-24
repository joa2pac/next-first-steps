import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>

      <div className="flex flex-1"></div>

      <a className="mr-2" href="/general/about">
        About
      </a>
      <a className="mr-2" href="/general/contact">
        Contact
      </a>
      <a className="mr-2" href="/general/princing">
        Princing
      </a>
    </nav>
  );
};
