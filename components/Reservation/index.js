import styles from "./styles.module.css";
import { Divider } from "../../data";
import Image from "next/image";
export default function Reservation() {
  return (
    <div className={styles.wrapper} id="reservation">
      <div className={styles.heading}>Reservation</div>
      <div className={styles.containerDivider} >
          <div className="DividerMidT">
            <Image src={Divider}  alt={"main menu"} />
          </div>
        </div>
      <br />
      <p className={styles.text2}> Lorem ipsum Loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum</p>
      <form className={styles.form} action="https://formsubmit.co/heemankv@gmail.com" method="POST" >
        <input
          type="text"
          placeholder="Name"
          name="Name"
        />
        <div className={styles.flexForm}>
          <input
            type="text"
            placeholder="Date: 23rd December, 2021"
            name="Name"

          />
          <input
            type="text"
            placeholder="Time Range: 6pm to 10pm"
            name="Name"

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

        <p className={styles.text}> We&apos;ll surely contact you shortly after you have submitted</p>
        
        <button>Submit</button>
      </form>
    </div>
  );
}
