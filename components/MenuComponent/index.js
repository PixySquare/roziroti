import Link from "next/link";
import MenuItem from "../MenuItem";
import styles from "./styles.module.css";
import { MenuSection } from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MenuComponent() {

  const responsive = {
    superLargeDesktop: {
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
      <div className={styles.upperInfo}>
        <div style={{ textAlign: "center" }} className={styles.heading}>{MenuSection.heading}</div>
        <p
          style={{ lineHeight: "23.5px", fontWeight: 300, textAlign: "center"}}
        >
          {MenuSection.text}
        </p>
      </div>
      <div className="onDesktop">
        <div className={styles.menuFlex}>
          {MenuSection.foodItems.map((item,index) => (
            <MenuItem key={index} data={item} />
          ))}
        </div>
      </div>    
      <div className="onMobile"> 
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
          {MenuSection.foodItems.map((item,index) => (
            <div className={styles.center} key={index}>
              <MenuItem key={index} data={item} />
            </div>
          ))}
        </Carousel>
        <br />
      </div>
      
      <Link href="/menu" passHref>
      <div className={styles.btn}>
          <p style={{ textAlign: "center" }}>View Menu</p>
      </div>
      </Link>

    </div>
  );
}

export default MenuComponent;
