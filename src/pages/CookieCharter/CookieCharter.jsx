import { useNavigate } from "react-router-dom";

function CookieCharter() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col flex-auto items-center justify-center bg-gray-3 mx-4">
      <button className="btn btn-rt1 self-start w-16 px-4 shadow-2xl mt-5" onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="card md:p-8 p-4 mt-5  mb-10 max-w-4xl w-full flex flex-col flex-auto text-gray-3 shadow-xl">
        <h1 className="text-2xl font-semibold mb-5">Charte d’utilisation des cookies</h1>
        <hr className="border border-gray-1 mb-5" />
        <p className="text-sm mb-5">
          runtogether.fr utilise les cookies afin de vous proposer un service web amélioré et davantage personnalisé. À
          travers cette charte, nous vous présentons comment et pourquoi nous utilisons des cookies sur ce site, en
          toute transparence.
        </p>
        <h3 className="text-lg font-medium mb-5">Qu’est-ce qu’un cookie et à quoi sert-il ?</h3>
        <p className="text-sm mb-5">
          Un cookie est un petit fichier texte enregistré, et/ou lu par votre navigateur, sur le disque dur de votre
          terminal (PC, ordinateur portable ou smartphone, par exemple) et déposé par les sites internet que vous
          visitez. Il contient plusieurs données : le nom du serveur qui l’a déposé, un identifiant sous forme de numéro
          unique, éventuellement une date d’expiration. Ces informations sont parfois stockées sur l’ordinateur dans un
          simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
        </p>
        <p className="text-sm mb-5">
          Quasiment tous les sites utilisent des cookies pour bien fonctionner et optimiser leur ergonomie et leurs
          fonctionnalités. Les cookies rendent également les interactions avec les sites plus sécurisées et rapides,
          dans la mesure où ceux-ci peuvent se souvenir de vos préférences (telles que votre identifiant et votre
          langue) en renvoyant les informations qu’ils contiennent au site d’origine (cookie interne) ou à un autre site
          auquel ils appartiennent (cookie tiers), lorsque vous visitez à nouveau le site concerné à partir du même
          terminal. Les cookies peuvent être de différentes natures : cookies absolument nécessaires, cookies de
          fonctionnalité, cookies d’analyse et de performance du site… Utilisation des cookies tiers.
        </p>
        <h3 className="text-lg font-medium mb-5">Concernant les cookies utilisés sur runtogether.fr</h3>
        <p className="text-sm mb-5">
          Nous utilisons uniquement des cookies interne essentiels à la connexion et à la navigation sur le site, aucun
          cookie tiers n'est utilisé.
        </p>
        <h3 className="text-lg font-medium mb-5">Que faire si vous ne souhaitez pas activer les cookies ?</h3>
        <p className="text-sm mb-3">
          Vous pouvez révoquer votre consentement à l’utilisation des cookies à tout moment, en paramétrant votre
          navigateur internet :
        </p>
        <p className="text-sm mb-3">
          Si vous souhaitez supprimer les cookies enregistrés sur votre terminal et paramétrer votre navigateur pour
          refuser les cookies, vous pouvez le faire via les préférences de votre navigateur internet. Ces options de
          navigation relatives aux cookies se trouvent habituellement dans les menus « Options », « Outils » ou «
          Préférences » du navigateur que vous utilisez pour accéder à ce site. Cependant, selon les différents
          navigateurs existants, des moyens différents peuvent être utilisés pour désactiver les cookies. Pour en savoir
          plus vous pouvez suivre les liens référencés ci-dessous :
        </p>
        <ul className="text-sm mb-5 ml-4 underline list-disc">
          <li>
            <a href="http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies">
              Microsoft Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?hl=fr">Google Chrome</a>
          </li>
          <li>
            <a href="https://support.apple.com/kb/PH19214?locale=fr_FR&amp;viewlocale=fr_FR">Safari</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies">Firefox</a>
          </li>
          <li>
            <a href="http://help.opera.com/Windows/10.20/fr/cookies.html">Opera</a>
          </li>
        </ul>
        <p className="text-sm mb-3">
          Veuillez noter que si vous refusez, depuis votre navigateur internet, l’enregistrement de cookies sur votre
          terminal, vous serez toujours en mesure de naviguer sur ce site, mais certaines parties et options pourraient
          ne pas fonctionner correctement.
        </p>
      </div>
    </main>
  );
}

export default CookieCharter;
