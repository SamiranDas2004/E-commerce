import React, { useState } from "react";
import HomesectionCard from "../HomesectionCard/HomesectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import { MensData } from "../../Data/mens";

function HomesectionCarosol({ data=[], sectionName }) {
  // const [activeIndex, setactiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  // const slidePrev = () => setactiveIndex(activeIndex - 1);
  // const slideNext = () => setactiveIndex(activeIndex + 1);

  // const syncActiveIndex = ({ item }) => setactiveIndex(item);

  const items = data.map((item) => <HomesectionCard product={item} />);
  return (
    <div className=" relative px- lg:px-8">
    <h2 className=" text-2xl font-exrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-6">
        <AliceCarousel
          disableDotsControls
          // onSlideChange={syncActiveIndex}
          // activeIndex={activeIndex}
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
        {/* {activeIndex !== items.length - 4 && (
          <Button
            onClick={slideNext}
            
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translate(50%) rotate()",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />{" "}
          </Button>
        )}
        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translate(-30%) rotate(-180deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon />
        </Button> */}
      </div>
    </div>
  );
}

export default HomesectionCarosol;
