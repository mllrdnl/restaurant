import Image from "next/image";
import pcStyles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={pcStyles.container}>
      <Image src="/img/latte.jpeg" alt="" width="500" height="500" />
      <h1 className={pcStyles.title}>Latte</h1>
      <span className={pcStyles.price}>$4.50</span>
      <p className={pcStyles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default ProductCard;
