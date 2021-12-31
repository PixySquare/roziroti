import Link from "next/link";
import MenuItem from "../MenuItem";
import styles from "./styles.module.css";
import Image from "next/image";
import { Divider } from "../../data";

import { MenuSection, MenuSectionMobile } from "../../data";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function MenuComponent() {

  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  return (
    <div className={styles.wrapper} id="menu">
      <div className={styles.upperInfo}>
        <div style={{ textAlign: "center" }} className="heading">
          {MenuSection.heading}
        </div>
        <div className={styles.containerDivider} >
          <div className="DividerMid">
            <Image src={Divider}  alt={"main menu"} />
          </div>
        </div>
      
        <p style={{ lineHeight: "23.5px", fontWeight: 300}} className="leftcenter">
          {MenuSection.text}
        </p>
      </div>
      <div>
      <div className="onDesktop" >
        <div className={styles.menuFlex}>
          {MenuSection.foodItems.map((item,index) => (
            <MenuItem key={index} data={item} />
          ))}
        </div>
      </div> 

      <div className="onMobile">
          <div className={styles.menuFlex}>
            {MenuSectionMobile.foodItems.map((item,index) => (
              <MenuItem key={index} data={item} />
            ))}
          </div>
      </div>
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
