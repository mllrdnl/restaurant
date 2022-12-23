import Image from "next/image";
import pcStyles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ coffee }) => {
  return (
    <div className={pcStyles.container}>
      <Link href={`/product/${coffee._id}`}>
        <Image src={coffee.img} alt="" width="500" height="500" />
      </Link>

      <h1 className={pcStyles.title}>{coffee.title}</h1>
      <span className={pcStyles.price}>{coffee.price[0]}</span>
      <p className={pcStyles.desc}>{coffee.desc}</p>
    </div>
  );
};

export default ProductCard;
