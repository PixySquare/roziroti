import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import Image from "next/image";
import { Divider } from "../../data";
import Link from "next/link";

function Gallery() {
  return (
    <div className={styles.container} id="gallery">
      <div className={styles.heading}>Gallery</div>
      <div className={styles.containerDivider}>
        <div className="DividerMid">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider} alt={"main menu"} />
        </div>
      </div>

      <div className={styles.gallery}>
        <figure className="gallery__item gallery__item--1">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 1" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 2" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 3" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 4" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <Link href={"/gallery"} passHref>
            <div className=" gallery__img">
              <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "}
                src={img}
                alt="Gallery image 4"
                className="gallery_img_opacity"
                // style={{ opacity: 0.5 }}
              />
              <div className={styles.headHeading}>View More</div>
            </div>
          </Link>

          {/* <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 5" className="gallery__img" /> */}
        </figure>
        {/* <figure className="gallery__item gallery__item--6">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={img} alt="Gallery image 6" className="gallery__img" />
        </figure> */}
      </div>
    </div>
  );
}

export default Gallery;
