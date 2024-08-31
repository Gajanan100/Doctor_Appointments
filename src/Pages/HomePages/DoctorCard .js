import { GraduationCap, Languages, MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({name,id,experience,education,avatar,languages=[],hospitals = [], doctor_categories = []}) => {
 
  const nevigate=useNavigate()
  function doctorDetailsHandler()
  {
    nevigate(`/doctor-details/${id}`)
  }
  return (
  
      <div className="bg-white rounded-md border flex  my-4">
        <div className="bg-light-success p-2  border-r">
          <div className="w-[80px] h-[80px] rounded-full ">
            <img
              className="w-full h-full object-cover object-top rounded-full"
              src={`http://localhost:1337${avatar?.url}`}
              alt="medicine"
            />{" "}
          </div>
        </div>

        <div className="p-4 border-r w-[30%]">
          <div onClick={doctorDetailsHandler} className='cursor-pointer'>
            <h4 className="text-dark-primary font-semibold text-[13px]">
              {name}
            </h4>
            <div className="text-xs  text-primary">
              <span>Fetal Medicine</span> | {experience} years exp
            </div>
          </div>
          <hr className="my-3" />
          <div className="space-y-2">
            <table className="text-neutral-500 text-xs g_doctor_cards">
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <MapPin size={14} />{" "}
                  </td>
                  <td>
                    <span>{hospitals[0]?.name}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Languages size={14} />{" "}
                  </td>
                  <td>
                    <span>{languages?.map((ele)=> ele.name)}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <GraduationCap size={14} />{" "}
                  </td>
                  <td>
                    <span>
                      {education}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex text-xs items-center gap-1 text-neutral-500"></div>
            <div className="flex text-xs items-center gap-1 text-neutral-500"></div>
          </div>
        </div>
        <div className="p-4 flex text-center  flex-col justify-center items-center w-[40%] mx-auto gap-2">
          <h6 className="text-light-warning font-semibold">MON-SAT</h6>
          <p className="text-sm text-primary">
            (09:00 AM-11:00AM, 12:00 PM-07:00 PM)
          </p>
          {hospitals?.length > 1 && <select className='border w-[70%] rounded-md outline-none mx-auto p-1 text-sm'>
                    <option value="">Select Hospital</option>
                    {hospitals?.map(({ name, id }) => <option key={id} value={id}>{name}</option>)}
                </select>}
          <button className="bg-gradient-to-r font-semibold text-white text-sm p-2 px-5 rounded-[5px]  from-[#036E8C] to-[#1D4E5E]">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    
  );
};

export default DoctorCard;
