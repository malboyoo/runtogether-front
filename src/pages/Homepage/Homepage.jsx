import styles from "./Homepage.module.scss";
import Logo from "../../components/Logo/Logo";

function Homepage() {
  return (
    <div className={`${styles.homepage} flex items-start justify-start`}>
      <div className="flex flex-col justify-center items-center flex-auto h-full">
        <div>
          <Logo size="text-4xl" />
        </div>
        <h1 className="text-3xl italic">Planifiez vos sorties running entre amis!</h1>{" "}
      </div>
    </div>
  );
}

export default Homepage;
