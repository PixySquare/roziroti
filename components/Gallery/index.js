import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import Image from "next/image";
import { Divider } from "../../data";
import Link from "next/link";

function Gallery() {
  return (
    <div className={styles.container}  id="gallery">
      <div className={styles.heading}>Gallery</div>
      <div className={styles.containerDivider} >
          <div className="DividerMid">
            <Image src={Divider}  alt={"main menu"} />
          </div>
        </div>

      <br />
      <div className={styles.gallery}>
        <figure className="gallery__item gallery__item--1">
          <Image src={img} alt="Gallery image 1" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <Image src={img} alt="Gallery image 2" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <Image src={img} alt="Gallery image 3" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <Image src={img} alt="Gallery image 4" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--5">
        <Link href={"https://www.google.com"} passHref>
          <div className=" gallery__img" >
            <div>
              <div styles={{margin:0}} className={styles.headHeading}>
               View More
              </div>
            </div>
          </div>
          </Link>

          {/* <Image src={img} alt="Gallery image 5" className="gallery__img" /> */}
        </figure>
        {/* <figure className="gallery__item gallery__item--6">
          <Image src={img} alt="Gallery image 6" className="gallery__img" />
        </figure> */}
      </div>
    </div>
  );
}

export default Gallery;
