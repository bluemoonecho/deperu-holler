import { useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();

  const switchLanguage = (lang) => {
    navigate(`/${lang}`);
  };

  return (
    <select onChange={(e) => switchLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
      <option value="srd">Sardo</option>
    </select>
  );
};

export default LanguageSwitcher;
