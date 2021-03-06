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
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider} />
          </div>
        </div>
        <br />
      <div className={styles.flexDiv}>
        <div className={styles.leftContainer}>
          <p className="textDiv onDesktop">
          {AboutSection.text}
          </p>
          <h className="textDiv onMobile">
          {AboutSection.textM}
          </h>
        </div>
        <div className={styles.rightContainer}>
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={AboutSection.image} className="imageDiv"  height="400" width="600"  />
        </div>
        <p className={  " onMobile textDiv2"}>
            Your Safety is our responsibility
        </p>
      </div>

      <div className={`${styles.teamFlex}`}>
      
            <TeamCard data={AboutSection.person1} />
          
            {/* <TeamCard data={AboutSection.person3} /> */}
      </div>
      

    </div>
  );
}

export default AboutUs;
