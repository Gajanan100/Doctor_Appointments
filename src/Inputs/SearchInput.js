import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Update_Active_Doctor_Category } from "../Provider/reducer/HomePage/HomePageReducer";

    const SearchInput = ({searchApiCall}) => {
  const[showSearchBox,setShowSearchBox]=useState(false)
  const [searcInput, setSearchInput] = useState("")
  const {doctorList,activeDoctorCategory}=useSelector(state => state?.HomePageReducer);

  // const [searcValue, setsearcValue] = useState(activeDoctorCategory)
  const dispatch=useDispatch()
  // console.log(doctorList);
  // console.log(activeDoctorCategory);
  const {activeLocation}=useSelector(state => state?.globalReducer)
  useEffect(() => {
    if(searcInput){
      let query=`&filters[name][$contains]=${searcInput}&filters[hospitals][locations][name]=${activeLocation}`
      const searchTime=setTimeout(() => {
        searchApiCall(query)
       }, 700);
      return () => clearTimeout(searchTime)
    }
    else if(activeLocation)
        {
          let query=`&filters[hospitals][locations][name]=${activeLocation}`
          searchApiCall(query)
        }
  },[searcInput,searchApiCall,activeLocation])
  return (
    <div>
      <div className={`bg-white relative ${showSearchBox ? "rounded-t-md" :"rounded-md"} p-1 flex px-4 gap-1 items-center`}>
        <Search size={16} />
        <input 
        value={activeDoctorCategory || ""}
        onChange={(event) => {
          dispatch({type:Update_Active_Doctor_Category, payload:event.target.value});
          setSearchInput(event.target.value)
        }}
        onFocus={() => setShowSearchBox(true)} onBlur={() => setTimeout(() => {
          setShowSearchBox(false)
        }, 300)
      }
          type="text"
          placeholder="Search by: Doctors, Specialities, Symtoms, Diseases & Treatments"
          className="flex-1 p-2 text-xs outline-none"
        />

{ showSearchBox &&  <div className="absolute left-0 top-[100%] pb-2 w-full bg-white shadow-md rounded-b-md">
          <ul className="p-0 text-sm  ">
            {doctorList.map((ele) => {
              return <li  onClick={() => {
                dispatch({type:Update_Active_Doctor_Category, payload: ele?.name})
              }} key={ele.id} className={`cursor-pointer items-center ${activeDoctorCategory===ele?.name ?"bg-dark-primary text-white": "hover:bg-neutral-200 border-b"}  p-2 `}>
              <div className="flex justify-between ">
                <h6>{ele?.name}</h6>
                <h6>{ele?.doctor_categories[0]?.name}</h6>
              </div>
              </li>
            })}
            {/* <li className="cursor-pointer items-center bg-dark-primary p-2 text-white">
            <div className="flex justify-between ">
              <h6>Dr Anshul Warman</h6>
              <h6>Doctor</h6>
            </div>
            </li>

            <li className="cursor-pointer hover:bg-neutral-200 border-b">
            <div className="flex justify-between items-center p-2 text-black">
              <h6>Dr Anshul Warman</h6>
              <h6>Doctor</h6>
            </div>
            </li>

            <li className="cursor-pointer hover:bg-neutral-200 border-b">
            <div className="flex justify-between items-center  p-2 text-black">
              <h6>Dr Anshul Warman</h6>
              <h6>Doctor</h6>
            </div>
            </li>

            <li className="cursor-pointer hover:bg-neutral-200 border-b">
            <div className="flex justify-between items-center  p-2 text-black">
              <h6>Dr Anshul Warman</h6>
              <h6>Doctor</h6>
            </div>
            </li> */}


          </ul>
        </div>}
        
      </div>
    </div>
  );
};

export default SearchInput;
