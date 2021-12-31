import styles from "./styles.module.css";
import { AboutSection } from '../../data';
import Image from "next/image";
import TeamCard from "../TeamCard";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Divider } from "../../data";

function AboutUs() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className={styles.wrapper} id="aboutus">
      <div style={{ textAlign: "center" }} className="heading">
          {AboutSection.heading}
        </div>
        <div className={styles.containerDivider} >
          <div className="DividerMid">
            <Image src={Divider}  alt={"main menu"} />
          </div>
        </div>
        <br />
      <div className={styles.flexDiv}>
        <div className={styles.leftContainer}>
          <p className="textDiv onDesktop">
          {AboutSection.text}
          </p>
          <p className="textDiv onMobile">
          {AboutSection.textM}
          </p>
        </div>
        <div className={styles.rightContainer}>
          <Image src={AboutSection.image} className="imageDiv" alt={AboutSection.imageAlt} />
        </div>
        <p className={  " onMobile textDiv2"}>
            Your Safety is our responsibility
        </p>
      </div>

      <div className={styles.teamFlex}>
            <TeamCard data={AboutSection.person1} />
            <TeamCard data={AboutSection.person3} />
      </div>
      

    </div>
  );
}

export default AboutUs;
