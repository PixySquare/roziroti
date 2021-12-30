import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";

import { cardContent } from "../../data";
import PostCard from "../PostCard";

export default function index() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.wrapper}>
      <div style={{ textAlign: "center" }} className={styles.heading}>
        More from us
      </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {cardContent.map((item, index) => {
          return (
            <div className={styles.cardContainer} key={index}>
              <PostCard data={item} />
            </div>
          );
        })}
      </Carousel>
      ;
    </div>
  );
}
