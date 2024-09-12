'use client';
import React, { useEffect, useState } from "react";

const Cookies: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Vérifier si le choix a déjà été fait et quand
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const consentTime = localStorage.getItem("consentTime");

    // Si aucun consentement n'a été donné ou si plus de 12 heures se sont écoulées
    if (!cookieConsent || (consentTime && Date.now() - parseInt(consentTime) > 12 * 60 * 60 * 1000)) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    // Stocker le consentement et l'heure actuelle
    localStorage.setItem("cookieConsent", consent ? "accepted" : "refused");
    localStorage.setItem("consentTime", Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null; // Ne pas afficher la bannière si l'utilisateur a déjà fait un choix

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center z-50">
      <p className="mb-4">
        En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies pour vous proposer des contenus et services adaptés à vos centres d'intérêts.
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

