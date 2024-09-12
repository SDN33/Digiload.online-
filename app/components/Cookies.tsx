import React, { useEffect, useState } from "react";

const Cookies: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (!cookieConsent || (consentTime && Date.now() - parseInt(consentTime) > 12 * 60 * 60 * 1000)) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem("cookieConsent", consent ? "accepted" : "refused");
    localStorage.setItem("consentTime", Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center z-50 bg-opacity-50">
      <p className="mb-4">
        En poursuivant votre navigation sur ce site, vous acceptez l&apos;utilisation de cookies pour vous proposer des contenus et services adaptés à vos centres d&apos;intérêts.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => handleConsent(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Accepter
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};

export default Cookies;
