import plStyles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={plStyles.container}>
      <h1 className={plStyles.title}>THE BEST COFFEE IN TOWN</h1>
      <p className={plStyles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        hendrerit lorem et massa lacinia, at porttitor lacus laoreet. Quisque
        libero orci, iaculis eget elit vel, dapibus lobortis erat. Aenean congue
        ex in neque malesuada finibus.
      </p>
      <div className={plStyles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
