import CookieConsent, {
    getCookieConsentValue,
    resetCookieConsentValue,
} from "react-cookie-consent";
import { useState, useEffect } from "react";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(
        !getCookieConsentValue("user-consent")
    );

    useEffect(() => {
        if (!getCookieConsentValue("user-consent")) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setShowBanner(false);
        document.cookie = "user-consent=accepted; path=/; max-age=12960000"; // 150 days
    };

    const handleReject = () => {
        setShowBanner(false);
        document.cookie = "user-consent=rejected; path=/; max-age=12960000"; // Store rejection
    };

    return (
        showBanner && (
            <CookieConsent
                location="bottom"
                enableDeclineButton
                declineButtonText="Rifiuta"
                buttonText="Accetta"
                declineButtonStyle={{
                    background: "#fff", // Red reject button
                    color: "#000",
                    fontSize: "14px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                }}
                buttonStyle={{
                    background: "#fff", // Green accept button
                    color: "#000",
                    fontSize: "14px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                }}
                style={{
                    background: "#000",
                    fontSize: "12px",
                    padding: "15px",
                }}
                expires={150}
                onAccept={handleAccept}
                onDecline={handleReject}
            >
                <p>
                    Questo sito utilizza cookie per migliorare l'esperienza utente. Puoi
                    accettare o rifiutare i cookie.
                </p>
            </CookieConsent>
        )
    );
};

export default CookieBanner;
