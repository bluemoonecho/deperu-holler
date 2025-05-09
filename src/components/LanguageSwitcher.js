import { Link, useLocation } from "react-router-dom";
import inghilterra from "../assets/images/inghilterra.png";
import sardegna from "../assets/images/sardegna.png";
import italia from "../assets/images/italia.png";

const LanguageSwitcher = () => {
  const location = useLocation();

  const createLangSwitchUrl = (lang) => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length > 1 && ["it", "en", "srd"].includes(pathParts[1])) {
      pathParts[1] = lang;
    } else {
      pathParts.unshift("", lang);
    }
    return pathParts.join("/");
  };

  return (
    <div className="flex gap-6 px-5 mt-5">
      <Link to={createLangSwitchUrl("it")}>
        <img src={italia} alt="italia" />
        <p className="text-xs ml-3">IT</p>
      </Link>
      <Link to={createLangSwitchUrl("en")}>
        <img src={inghilterra} alt="inghilterra" />
        <p className="text-xs ml-3">EN</p>
      </Link>
      <Link to={createLangSwitchUrl("srd")}>
        <img src={sardegna} alt="sardegna" />
        <p className="text-xs mx-auto">SRD</p>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
