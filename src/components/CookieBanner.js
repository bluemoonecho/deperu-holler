import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const { lang } = useParams();

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#000",
          fontSize: "12px",
          padding: "10px 15px",
          color: "#fff",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <span style={{ flex: 1 }}>
          Questo sito <strong>non utilizza cookie</strong> né strumenti di tracciamento. Nessun dato viene raccolto o memorizzato.{" "}
          <Link to={`/${lang}/privacy-policy`} style={{ color: "#00f" }}>Privacy Policy</Link>
        </span>
        <button
          onClick={handleClose}
          style={{
            background: "#fff",
            color: "#000",
            fontSize: "12px",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Chiudi
        </button>
      </div>
    )
  );
};

export default CookieBanner;
