import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

const CookieConsent = () => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 text-white rounded-full p-2 mr-3">
            <span className="font-bold text-xl">DL</span>
          </div>
          <h2 className="text-xl font-bold text-black">DIGILOAD</h2>
        </div>
        <p className="mb-4 text-sm text-black">
          digiload.online demande votre consentement pour utiliser vos données à caractère personnel dans les cas suivants :
        </p>
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Info className="mr-2 flex-shrink-0 text-blue-600" size={20} />
            <p className="text-sm text-black">Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, études d&apos;audience et développement de services</p>
          </div>
          <div className="flex items-start">
            <Info className="mr-2 flex-shrink-0 text-blue-600" size={20} />
            <p className="text-sm text-black">Stocker et/ou accéder à des informations sur un appareil</p>
          </div>
        </div>
        <details className="mb-4">
          <summary className="text-sm text-blue-600 cursor-pointer">En savoir plus</summary>
          <p className="mt-2 text-xs text-black">
            Vos données à caractère personnel seront traitées, et les informations liées à votre appareil (cookies, identifiants uniques et autres types de données) pourront être stockées et consultées par 136 fournisseur(s) TCF et 61 partenaires publicitaires, ainsi que partagées avec eux, ou utilisées spécifiquement par ce site ou cette application.
          </p>
          <p className="mt-2 text-xs text-black">
            Certains fournisseurs sont susceptibles de traiter vos données à caractère personnel selon le principe de l&apos;intérêt légitime. Vous pouvez vous y opposer en gérant vos options ci-dessous. Cliquez sur le lien en bas de cette page pour gérer ou retirer votre consentement des paramètres de confidentialité.
          </p>
        </details>
        <div className="flex justify-between">
          <button
            onClick={() => handleConsent(false)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Gérer vos préférences
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Autoriser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
