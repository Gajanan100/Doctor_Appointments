import { GraduationCap, Languages, Loader, MapPin, Share2} from "lucide-react";
import React, { useEffect } from "react";
import { getDoctorDetails, getDoctorSlots,  } from "../../HomePages/service";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./doctor.css"
import BookSlots from "./BookSlots ";

const DoctorDetail = () => {
  const {id}=useParams()
  const {mutateAsync,isPending,data}= useMutation({mutationFn:getDoctorDetails})

  const {mutateAsync:mutateAsyncSlot,isPending:isPendingSlot,data:dataSlot}= useMutation({mutationFn:getDoctorSlots})

  useEffect(() => {
    mutateAsync(id);
    mutateAsyncSlot(id)
  },[mutateAsync,mutateAsyncSlot,id,])
  if(isPending) return <Loader/>
  if(!data) return <>Doctor Details Not Found</>
  console.log(dataSlot);
  return (
    <section className="w-[80%] mx-auto flex gap-5 text-wrap ">
      <div className="w-full lg:w-[60%] ">
        <div className="bg-white border shadow my-2 flex p-4 rounded-md gap-4 flex-wrapn">
          <div className="w-[100px] border p-1 h-[100px] rounded-full">
            <img
              className="object-cover h-full w-full mt-0  object-top rounded-full"
              src={`http://localhost:1337${data?.avatar?.url}`}
              alt="img"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-[20px] font-semibold f text-black">
             {data?.name}
            </h5>
            <h5 className="text-[16px] font-semibold text-black">
            Cardiology
            </h5>
            <p>{data?.experience}+ years experience</p>
            <table className="text-neutral-500 text-sm mt-2 ">
              <tbody>

              <tr >
                  <td className="pe-2">                    
                    <GraduationCap size={14} />
                  </td>
                  <td>
                    <span>
                    {data?.education}
                    </span>
                  </td>
                </tr>


              <tr>
                  <td className="pe-2">
                    
                    <Languages size={14} />
                  </td>
                  <td>
                    <span> {data?.languages?.map(
                  (ele, index) => `${ele.name}${index >= 0 ? "," : ""}`)}</span>
                  </td>
                </tr>

                <tr>
                  <td className="pe-2">
                    
                    <MapPin size={14} />
                  </td>
                  <td>
                    <h6 className="text-[14px] font-semibold text-black">Apollo Hospitals Gandhinagar</h6>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div>
             <Share2 />
           </div>
        </div>
        {data?.about && <div>
                    <h5 className="text-3xl font-semibold">About</h5>
                    <BlocksRenderer content={data?.about} />
                </div>}
            </div>
      
      <div className="w-full lg:w-[37%] flex-1">
        {isPendingSlot ? <Loader/> : ""}
        <pre className="text-wrap">
        </pre>
          
         {dataSlot && <BookSlots end={dataSlot[0]?.end} start={dataSlot[0]?.start}/>}
      </div>
    </section>
  );
};

export default DoctorDetail;
