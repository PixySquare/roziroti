import styles from "./styles.module.css";
import Image from "next/image";

function TeamCard(props) {
  return (
    <div className={styles.wrapper}>
      <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={props.data.image}   className="imageDiv"  height="250" width="250"/>
      <h2>{props.data.name}</h2>
    </div>
  );
}

export default TeamCard;
