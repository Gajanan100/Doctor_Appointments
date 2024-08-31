import React, { useEffect, useMemo } from "react";
import DoctorCard from "./DoctorCard ";
import { useMutation } from "@tanstack/react-query";
import { doctorDetailsServiceList } from "./service";
import { useDispatch, useSelector } from "react-redux";
import { AppPagination } from "../../Component/Header/Pagination/AppPagination";
import DoctorsFilters from "./DoctorsFilters";
import { Update_Current_PAGE } from "../../Provider/reducer/HomePage/HomePageReducer";

const DoctorsDetailsList = () => {
    const {data,isPending,mutate}= useMutation({mutationFn: doctorDetailsServiceList })
    // const [currentPage, setCurrentPage] = useState(1)
    // console.log(data);
    const dispatch=useDispatch()
    const {activeLocation}=useSelector(state=> state?.globalReducer)
    const {doctorsFilter,currentPage}= useSelector(state => state?.HomePageReducer)
    console.log(doctorsFilter?.category);
    useEffect(() =>{
        if(!activeLocation) return
        let query=`&filters[hospitals][locations][name]=${activeLocation}&pagination[page]=${currentPage}&pagination[pageSize]=3`
       if(doctorsFilter?.category )
        {
               query += ` &filters[doctor_categories][id][$eq]=${doctorsFilter?.category}`
        }
        if(doctorsFilter?.gender)
          {
                 query += ` &filters[Gender][$eq]=${doctorsFilter?.gender}`
          }
          if(doctorsFilter?.language)
            {
                   query += ` &filters[languages][$in]=${doctorsFilter?.language}`
            }
            if(doctorsFilter?.sort)
              {
                query += `&sort[0]=experience:${doctorsFilter?.sort === "1" ? "desc" : "asc"}`
              }
        mutate(query)
    },[mutate,activeLocation,currentPage,doctorsFilter, doctorsFilter?.category,doctorsFilter?.gender,doctorsFilter?.language,doctorsFilter?.sort])

    
    const total = useMemo(() => data?.meta?.pagination?.total ?? 0, [data?.meta?.pagination?.total])
    if(isPending) return <>loading.....</>
  return (
    <div>
      <h5>Search Result ({total})</h5>
      <DoctorsFilters/>
        {data?.data?.map(({id, ...rest}) =>{
            return < DoctorCard {...rest} id={id} key={id}/>
        })}
      <AppPagination currentPage={currentPage} total={total} onPageChnage={(page) => dispatch({type:Update_Current_PAGE, payload:page})} />

    </div>
  );
};

export default DoctorsDetailsList;
