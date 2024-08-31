import React, { useEffect } from "react";
import SearchInput from "../../Inputs/SearchInput";
import { useMutation } from "@tanstack/react-query";
import { DoctorList, hospitalList } from "./service";
import { useDispatch, useSelector } from "react-redux";
import { Update_Doctor_List } from "../../Provider/reducer/HomePage/HomePageReducer";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightFill } from "react-icons/ri";

const Banner = () => {
  const dispatch = useDispatch();
  const { activeLocation } = useSelector((state) => state?.globalReducer);
  const { mutate } = useMutation({
    mutationFn: DoctorList,
    onSuccess(data) {
      dispatch({ type: Update_Doctor_List, payload: data });
    },
  });

  // Hospital Mutate Things
  const {
    mutate: mutateHospitalList,
    data,
    isPending,
  } = useMutation({
    mutationFn: hospitalList,
  });
  useEffect(() => {
    if (activeLocation) {
      let query = `&filters[locations][name][$contains]=${activeLocation}`;
      mutateHospitalList(query);
    }
  }, [mutateHospitalList, activeLocation]);
  // useEffect(()=>{
  //     mutate()
  // },[mutate])
  // console.log(data);
  return (
    <>
      <div className="text-white  flex bg-[#2e718e] list-none  items-center py-2 px-20 text-sm">
        <li className="flex p-0">
          <NavLink>Home</NavLink>
          <RiArrowDropRightFill size={22} />
        </li>
        <li className="flex p-0 ">
          <NavLink>Physical-Appointment</NavLink>
          <RiArrowDropRightFill size={22} />
        </li>
        <li>{activeLocation}</li>
      </div>
      <div className="bg-primary py-8 ">
        <div className="text-white text-4xl text font-semibold	py-2  text-center">
          <h1 className="items-center "> Best Doctors In {activeLocation} </h1>
        </div>
        <div className=" p-2 flex gap-2 items-center">
          <div className="w-full lg:w-1/2">
            <SearchInput searchApiCall={mutate} />
          </div>
          <div className="w-full lg:w-1/2">
            <select
              className={`bg-white w-full outline-none text-sm rounded-md h-[38px]  px-4`}
            >
              <option value="">
                {isPending ? "Loading..." : "Select Hospitals"}
              </option>
              {data?.map(({ id, name }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
