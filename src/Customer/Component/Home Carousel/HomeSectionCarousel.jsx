import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Card from "./Card";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data , SectionName}) => {
    // console.log(mens_kurta)
    const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  console.log(activeIndex)
const slidePrev=()=>setActiveIndex(activeIndex-1);
const slideNext=()=>setActiveIndex(activeIndex+1);
const syncActiveIndex=({item})=>setActiveIndex(item);
  const items = data.slice(0,10).map((item) => <Card product={item}  /> );
  return (
    <section className=" px-4 lg:px-8 border">
        <h2 className="fontextrabold py-5 text-gray-800">{SectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {/* right button */}
        {activeIndex !==items.length-5 && <Button
        onClick={slideNext}
          variant="contained"
          className="z-50"
          sx={{
            bgcolor: "white",
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black"}} />
        </Button>}
        {/* left side button */}
      
       { activeIndex !== 0 && <Button
        onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            bgcolor: "white",
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black"}} />
        </Button>}
      
      </div>
    </section>
  );
};

export default HomeSectionCarousel;
