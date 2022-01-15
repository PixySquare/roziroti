import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Zomato from "../../public/svg/zomato.svg";
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
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <CarouselCover />
      <div className={styles.iconsColumn}>
        <Link
          href={
            "https://www.zomato.com/ncr/rozi-roti-sector-16-dwarka-new-delhi/order"
          }
        >
          <a target="_blank">
            <Image
              alt={
                "Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "
              }
              src={Zomato}
              // height="200"
              // weight="300"

              style={{ color: "#006AFF" }}
            />
          </a>
        </Link>

        <Link href={"https://www.facebook.com/ROZI-ROTI-102067657838824"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "#006AFF" }}
            />
          </a>
        </Link>

        <Link href={"https://www.instagram.com/rozii_roti/"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "rgb(189, 105, 189)" }}
            />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=9354206408"}>
          <a target="_blank" className={styles.nav_item}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              style={{ color: "#25D366" }}
            />
          </a>
        </Link>
      </div>

      {/* <div className={styles.iconsColumn2 + " onMobile"}>

        <Link href={"https://www.zomato.com"}>
            <a target="_blank">
              <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "}
                src={Zomato}
                size="3x"
                alt="zomato"
                style={{ color: "#006AFF" }} />
            </a>
          </Link>
          <br />
          

        <Link href={"https://www.facebook.com/ROZI-ROTI-102067657838824"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "#006AFF" }} />
          </a>
        </Link>
        <br />

        <Link href={"https://www.instagram.com/rozii_roti/"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "rgb(189, 105, 189)" }} />
          </a>
        </Link>
        <br />
        <Link href={"https://api.whatsapp.com/send?phone=8368471403"}>
          <a target="_blank" className={styles.nav_item}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              style={{ color: "#25D366" }} />
          </a>
        </Link>
      </div> */}
    </>
  );
}

export default IntroComponent;
