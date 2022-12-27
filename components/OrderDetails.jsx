import React, { useState } from "react";
import styles from "../styles/OrderDetails.module.css";

const OrderDetails = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label lassName={styles.input}>Name Surname</label>
          <input
            placeholder="Jane Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label lassName={styles.input}>Address</label>
          <input
            placeholder="1234 Your Mom's Street"
            type="text"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
