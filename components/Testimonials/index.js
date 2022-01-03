import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";
import { Testimonials, Divider } from "../../data";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class index extends Component {
  render() {
    return (
      <div
        style={{ marginBottom: "70", scrollMarginTop: 100, marginTop: 50, color: "#1F3A24" }}
        id="testimony"
      >
        <div className={styles.heading} style={{ textAlign: "center" }}>
          Testimonials
        </div>

        <div className={styles.containerDivider} >
          <div className="DividerMidT">
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider}  alt={"main menu"} />
          </div>
        </div>

        <br />
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          arrows={false} 
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {Testimonials.map((item,index) => {
            return (
              <div className={styles.testimonialWrapper} key={index}>
                <span
                  className={styles.text}
                  style={{ opacity: 1.0, textAlign: "center", width: "100%" }}
                >
                  {item.Comment}
                </span>
                <span
                  className={styles.writer}
                  style={{
                    opacity: 0.8,
                    float: "right",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  {" "}
                  ~ {item.Writer}
                </span>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
