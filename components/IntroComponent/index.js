import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Banner1, Banner2, Banner3, Banner4 } from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselCover from "../CarouselCover";

function IntroComponent() {

  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      {/* <div>
      <AutoplaySlider
        style={{ styles }}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
        buttons={false}
        mobileTouch={true}

      >
        <div className="">
          <Image src={Banner2} alt="sd" />
        </div>

        <div className="">
          <Image src={Banner3} alt="sd" />
        </div>

        <div className="">
          <Image src={Banner3} alt="sd" />
        </div>

      </AutoplaySlider>
    </div> */}
      {/* <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={5000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <Image src={Banner1} alt="image"  />
        </div>
        <div>
          <Image src={Banner2} alt="image" />
        </div>
        <div>
          <Image src={Banner3} alt="image" />
        </div>
        <div>
          <Image src={Banner1} alt="image"  />
        </div>
        <div>
          <Image src={Banner2} alt="image" />
        </div>
        <div>
          <Image src={Banner3} alt="image" />
        </div>
        <div>
          <Image src={Banner1} alt="image"  />
        </div>
        <div>
          <Image src={Banner2} alt="image" />
        </div>
        <div>
          <Image src={Banner3} alt="image" />
        </div>
        
      </Carousel> */}

      <CarouselCover/>

    <div className={styles.iconsColumn}>
        <Link href={"https://www.facebook.com"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="3x"
              style={{ color: "#006AFF" }} />
          </a>
        </Link>
        <br />

        <Link href={"https://www.facebook.com"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              style={{ color: "rgb(189, 105, 189)" }} />
          </a>
        </Link>
        <br />
        <Link href={"https://www.whatsapp.com"}>
          <a target="_blank" className={styles.nav_item}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="3x"
              style={{ color: "#25D366" }} />
          </a>
        </Link>
      </div>
    </>
  );
}

export default IntroComponent;
