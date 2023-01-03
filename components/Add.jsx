import React from "react";
import styles from "../styles/Add.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new coffee</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default Add;
