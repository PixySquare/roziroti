import styles from "./styles.module.css";
import Image from "next/image";

function TeamCard(props) {
  return (
    <div className={styles.wrapper}>
      <Image src={props.data.image} alt={props.data.name}  className="imageDiv"/>
      <p>{props.data.name}</p>
    </div>
  );
}

export default TeamCard;
