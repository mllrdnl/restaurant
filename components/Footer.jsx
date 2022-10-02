import Image from "next/image";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.item}>
        <Image src="/img/logo2.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={footerStyles.item}>
        <div className={footerStyles.card}>
          <h2 className={footerStyles.motto}>THE BEST COFFEE IN PORTLAND</h2>
        </div>
        <div className={footerStyles.card}>
          <h1 className={footerStyles.title}>FIND OUR COFFEE</h1>
          <p className={footerStyles.text}>
            1234 Sandy Blvd
            <br />
            Portland, OR
            <br />
            123-456-7890
          </p>
          <p className={footerStyles.text}>
            1234 Sandy Blvd
            <br />
            Portland, OR
            <br />
            123-456-7890
          </p>
          <p className={footerStyles.text}>
            1234 Sandy Blvd
            <br />
            Portland, OR
            <br />
            123-456-7890
          </p>
        </div>
        <div className={footerStyles.card}>
          <h1 className={footerStyles.title}>WORKING HOURS</h1>
          <p className={footerStyles.text}>
            MONDAY - FRIDAY
            <br />
            7:00AM-4:00PM
          </p>
          <p className={footerStyles.text}>
            SATURDAY - SUNDAY
            <br />
            8:00AM-3:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
