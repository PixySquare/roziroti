import styles from "./styles.module.css";
import { Divider } from "../../data";
import Image from "next/image";
export default function Reservation() {
  return (
    <div className={styles.wrapper} id="reservation">
      <div className={styles.heading}>Reservation</div>
      <div className={styles.containerDivider} >
          <div className="DividerMidT">
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider}  />
          </div>
        </div>
      <br />
      <div className={styles.text2}> Celebrate your occasions with the best restaurant in town.</div>
      <form className={styles.form} action="https://formsubmit.co/roziroti2021@gmail.com" method="POST" >
        <input
          type="text"
          placeholder="Name"
          name="Name"
        />
        <div className={styles.flexForm}>
          <input
            type="text"
            placeholder="Date: 23rd December, 2021"
            name="Date"

          />
          <input
            type="text"
            placeholder="Time Range: 6pm to 10pm"
            name="Time Range"

            style={{ marginLeft: "10px !import" }}
          />
        </div>
        <input
          type="text"
          placeholder="What are you celebrating?"
          name="Occassion"

        />
        <input
          type="text"
          placeholder="Your Contact information"
          name="Mobile Number"
        />

        <p className={styles.text}> We&apos;ll surely contact you shortly after you have submitted.</p>
        
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
