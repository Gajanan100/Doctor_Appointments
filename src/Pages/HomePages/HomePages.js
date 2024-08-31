import React from "react";
import Banner from "./Banner";
import './HomePages.css'
import DoctorsDetailsList from "./DoctorsDetailsList";

const HomePages = () => {
  return (
    <div className="w-full lg:w-[95%] mx-auto ">
      <Banner />

      <div className="w-[80%] mx-auto">

        <div className="flex">
          <div className="w-full lg:w-[50%]">
            <DoctorsDetailsList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
