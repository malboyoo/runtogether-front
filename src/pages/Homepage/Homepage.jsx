import backgroundImg from "../../assets/images/runners_IA.png";
import styles from "./Homepage.module.scss";
import Logo from "../../components/Logo/Logo";

function Homepage() {
  return (
    <div
      className={`${styles.homepage} flex items-start justify-start`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.calc}></div>
      <div className="ml-20 mt-20 z-10 ">
        <Logo size="text-4xl" />
        <h1 className="text-3xl italic">Planifiez vos sorties running entre amis!</h1>{" "}
      </div>
    </div>
  );
}

export default Homepage;
