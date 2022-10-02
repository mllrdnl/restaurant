import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);

  const coffeeProduct = {
    id: 1,
    img: "/img/latte.jpeg",
    name: "LATTE",
    price: [4.0, 4.5, 5.0],
    desc: "A delicious latte",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={coffeeProduct.img}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{coffeeProduct.name}</h1>
        <span className={styles.price}>${coffeeProduct.price[size]}</span>
        <p className={styles.desc}>{coffeeProduct.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>
          Choose alternate/additional ingredients
        </h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="oatmilk"
              name="oatmilk"
            />
            <label htmlFor="oatmilk">Oat Milk</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="almondmilk"
              name="almondmilk"
            />
            <label htmlFor="almondmilk">Almond Milk</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="vanilla"
              name="vanilla"
            />
            <label htmlFor="vanilla">Vanilla Syrup</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="lavender"
              name="lavender"
            />
            <label htmlFor="lavender">Lavender Syrup</label>
          </div>
        </div>
        <div className={styles.add}>
          <input className={styles.quantity} type="number" defaultValue={1} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
