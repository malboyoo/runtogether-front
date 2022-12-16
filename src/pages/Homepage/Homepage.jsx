import styles from "./Homepage.module.scss";
import Logo from "../../components/Logo/Logo";
import Cookie from "./components/Cookie/Cookie";
import runningImg from "../../assets/images/icons/running_blue.png";
import trailingImg from "../../assets/images/icons/trailing_blue.png";
import cyclingImg from "../../assets/images/icons/cycling_blue.png";
import walkingImg from "../../assets/images/icons/walking_blue.png";
import runners from "../../assets/images/homepagebg.jpg";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <main className={`${styles.homepage} flex flex-auto justify-center bg-gray-4`}>
      <div className="flex flex-col items-center flex-auto h-full text-base md:text-lg ">
        <div className="imgContainer overflow-hidden grayscale shadow-2xl shadow-logo-2 md:rounded-b-lg">
          <img src={runners} alt="des traileurs dans le desert" className="object-cover" />
        </div>
        <div className="flex flex-col items-center">
          <div className="py-5 px-10 mx-4 rounded-2xl bg-dark-2 md:-translate-y-10 -translate-y-5 flex flex-col items-center max-w-4xl ">
            <div className="">
              <Logo size="text-4xl" />
            </div>
            <hr className="border border-logo-2 my-5 w-full" />
            <h1 className="text-2xl  uppercase font-semibold text-center">Planifiez vos sorties entre sportifs!</h1>
          </div>

          <div className="py-5 px-10 rounded-2xl mx-4 bg-dark-2 mt-5 flex flex-col justify-center items-center text-white max-w-4xl text-center">
            <p>
              runtogether.fr est un outil innovant et pratique pour les sportifs qui souhaitent s’organiser et partager
              des activités sportives ensemble.
            </p>
            <div className="flex flex-col relative w-full items-center justify-center ">
              <hr className="border border-logo-2 my-20 w-full" />
              <div className="py-5 px-10 rounded-2xl flex flex-row justify-center absolute  bg-dark-1 w-72">
                <div className={styles.iconContainer}>
                  <img src={runningImg} alt="Coureur" className={styles.icon} />
                </div>
                <div className={styles.iconContainer}>
                  <img src={trailingImg} alt="Traileur" className={styles.icon} />
                </div>
                <div className={styles.iconContainer}>
                  <img src={cyclingImg} alt="Cycliste" className={styles.icon} />
                </div>
                <div className={styles.iconContainer}>
                  <img src={walkingImg} alt="Marcheur" className={styles.icon} />
                </div>
              </div>
            </div>

            <p className="mb-6">
              Je veux donner aux sportifs une plus grande liberté et flexibilité pour planifier leurs sorties. Mon site
              vous permet de planifier des sorties en seulement quelques étapes, <strong>gratuitement</strong>.
            </p>
            <p>
              Que vous soyez un <strong>Coureur</strong>, <strong>Traileur</strong>, <strong>Marcheur</strong> ou{" "}
              <strong>Cycliste</strong>, cette application est faite pour vous!
            </p>
          </div>

          <div className="p-5 rounded-2xl mx-4 bg-dark-2 my-10 md:my-16 flex flex-row justify-center items-center text-logo-1 max-w-4xl text-center">
            <i className="fa-solid fa-person-digging text-6xl px-3"></i>
            <p>
              Veuillez prendre en compte que runtogether.fr est en cours de développement, je vous invite à me faire
              part de vos commentaires et suggestions afin de m'aider à améliorer votre expérience en ligne.{" "}
            </p>
          </div>

          <div className="py-5 px-10 rounded-2xl mx-4 mb-10 md:mb-16 flex flex-col justify-center items-center bg-dark-2 text-white">
            <p className="font-semibold text-lg text-center">N'attendez plus, Inscrivez vous!</p>

            <hr className="border border-logo-2 my-7 w-full" />
            <button className="btn btn-rt1 text-logo-1  text-2xl w-36" onClick={() => navigate("signup")}>
              S'INSCRIRE
            </button>
          </div>
        </div>
      </div>
      <Cookie />
    </main>
  );
}

export default Homepage;
