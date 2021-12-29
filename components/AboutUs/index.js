import styles from "./styles.module.css";
import { AboutSection } from '../../data';
import Image from "next/image";
import TeamCard from "../TeamCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className={styles.wrapper}>
      <div className={styles.heading}>{AboutSection.heading}</div>
      <div className={styles.flexDiv}>
        <div className={styles.leftContainer}>
          <p className={styles.textDiv}>
          {AboutSection.text}
          </p>
        </div>
        <div className={styles.rightContainer}>
          <Image src={AboutSection.image} className="imageDiv" alt={AboutSection.imageAlt} />
        </div>
      </div>
      <div className={styles.onDesktop}>
        <div className={styles.teamFlex}>
            <TeamCard data={AboutSection.person1} />
            <TeamCard data={AboutSection.person2} />
            <TeamCard data={AboutSection.person3} />
        </div>
      </div>

      <div className={styles.onMobile}> 
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <TeamCard data={AboutSection.person1} />
          <TeamCard data={AboutSection.person2} />
          <TeamCard data={AboutSection.person3} />
        </Carousel>
      </div>


        
    </div>
  );
}

export default AboutUs;
