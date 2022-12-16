import CookieConsent from "react-cookie-consent";

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Génial !"
      cookieName="acceptingCookie"
      style={{ background: "#212121", color: "#ddef3f", fontSize: "14px" }}
      buttonStyle={{ color: "white", background: "#57606f", fontSize: "13px", borderRadius: "6px", padding: "10px" }}
      expires={365}
    >
      Runtogether.fr utilise uniquement des cookies essentiel à la connexion, vos données resteront confidentielles et
      ne seront jamais transmise à une entité tierce.
    </CookieConsent>
  );
}

export default Cookie;
