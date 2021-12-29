import styles from "./styles.module.css";

export default function Reservation() {
  return (
    <div className={styles.wrapper}>
      <h1>Reservation</h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.flexForm}>
          <input
            type="text"
            placeholder="Your Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Name"
            style={{ marginLeft: "10px !import" }}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Occassion"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Mobile Number"
          // value={mobile}
          // onChange={(e) => setMobile(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
