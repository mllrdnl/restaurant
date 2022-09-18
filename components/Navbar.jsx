import Image from "next/image";
import navbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarStyles.container}>
      <div className={navbarStyles.item}>
        <div className={navbarStyles.callButton}>
          <Image
            src="/img/phoneiconwhite.png"
            alt="white phone icon"
            width="32"
            height="32"
          />
        </div>
        <div className={navbarStyles.texts}>
          <div className={navbarStyles.text}>ORDER NOW!</div>
          <div className={navbarStyles.text}>123 456 7890</div>
        </div>
      </div>
      <div className={navbarStyles.item}>
        <ul className={navbarStyles.list}>
          <li className={navbarStyles.listItem}>Homepage</li>
          <li className={navbarStyles.listItem}>Products</li>
          <li className={navbarStyles.listItem}>Menu</li>
          <Image
            src="/img/logo2.png"
            alt="circular logo that says coffee shop with a ring around that looks like spilled coffee"
            width="160px"
            height="160px"
          />
          <li className={navbarStyles.listItem}>Events</li>
          <li className={navbarStyles.listItem}>Blog</li>
          <li className={navbarStyles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={navbarStyles.item}>
        <div className={navbarStyles.cart}>
          <Image
            src="/img/cartwhite.png"
            alt="circular logo that says coffee shop with a ring around that looks like spilled coffee"
            width="40px"
            height="40px"
          />
          <div className={navbarStyles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
