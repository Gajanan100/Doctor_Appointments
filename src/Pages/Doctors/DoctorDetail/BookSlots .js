import React from "react";
import { createSlots, findTimeSlots } from "../../../lib/helper";
import Carousel from "react-multi-carousel";
import { Sun } from "lucide-react";

const BookSlots = ({ start, end }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const slotsData = createSlots();
  const timeSlots = findTimeSlots(start, end);
//   console.log(timeSlots);

  return (
    <div className="border p-4 rounded-md shadow-sm w-full">
      Book Hospital Visit
      <Carousel responsive={responsive} className="mt-2">
        {slotsData.map(({ day, date }) => {
          return (
            <button
              key={date}
              className="bg-neutral-200  mx-2 p-3 rounded-md text-sm flex justify-center items-center "
            >
              <div className="mx-0">
                <div>
                  <span>{day}</span>
                </div>
                <div>
                  <span>{date}</span>
                </div>
              </div>
            </button>
          );
        })}
      </Carousel>

      <div className="mt-3 my-2" >
          <div className="flex gap-2">
          <Sun className="text-primary"/>
     <h6 className="text-sm">AFTERNOON SLOTS</h6>
          </div>
          <div className="flex flex-wrap gap-2  border  rounded-md  p-2">
          {timeSlots.map((ele) => {
                    return <button key={ele} className='bg-neutral-200 mx-2 p-2 rounded-md text-sm flex justify-center items-center gap-2'><span>{ele}</span></button>
                })}
          </div>

            </div>
    </div>
  );
};

export default BookSlots;
