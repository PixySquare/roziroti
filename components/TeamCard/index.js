import styles from "./styles.module.css";
import Image from "next/image";

function TeamCard(props) {
  return (
    <div className={styles.wrapper}>
      <Image alt={"Gayatri eats food roziroti dwarka photo check out restaraunt now www.gayatrieats.com "} src={props.data.image}   className="imageDiv"  height="250" width="250"/>
      <h2 style={{margin:0}}>{props.data.name}</h2>
      <h4 style={{margin:0}}>Owner and Founder</h4>

    </div>
  );
}

export default TeamCard;
