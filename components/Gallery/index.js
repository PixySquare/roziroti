import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import Image from "next/image";
function Gallery() {
  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 40 }}>Gallery</h1>
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
          <Image src={img} alt="Gallery image 5" className="gallery__img" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <Image src={img} alt="Gallery image 6" className="gallery__img" />
        </figure>
      </div>
    </div>
  );
}

export default Gallery;
