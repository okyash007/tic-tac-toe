import React from "react";
import Quote from "./quote/Quote";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Quote />
      <div className="screen">
          <Outlet />
      </div>
    </>
  );
};

export default Body;
