/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Gallery.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Photo1,Photo2,Photo3,Photo4, Photo5,Photo6, Divider, MainCourse, RajmaMasala } from "../data";

function menu() {
  return (
    <div>
      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Let&apos;s Explore More</div>
      </div>
      <br />
      <br />
      <br />


      <div className={styles.row}>
        <div className={styles.column}>
            <Image src={RajmaMasala} style={{width: '100%'}} />
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro}/>
            <Image src={RajmaMasala}/>
        </div>
        <div className={styles.column}>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={RajmaMasala} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}}/>
            <Image src={intro} style={{width: '100%'}} />
            <Image src={RajmaMasala} style={{width: '100%'}}/>
        </div>
    </div>
    <br />
      <br />
      <Footer />
    </div>
  );
}

export default menu;
