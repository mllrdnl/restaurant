import { useState } from "react";
import Image from "next/image";
import featuredStyles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/latte.jpeg",
    "/img/dripcoffee.jpeg",
    "/img/matchalatte.jpeg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={featuredStyles.container}>
      <div
        className={featuredStyles.arrowLContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowLwhite.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={featuredStyles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={featuredStyles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={featuredStyles.arrowRContainer}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowRwhite.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
