import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showLegalPopup, setShowLegalPopup] = useState(false);

  const handleLegalClick = () => {
    setShowLegalPopup(true);
  };

  const handleClosePopup = () => {
    setShowLegalPopup(false);
  };

  return (
    <>
      <footer className="bg-white text-blue-500 p-4 text-center relative">
        <p>DigiLoad - &copy; {new Date().getFullYear()} Design by Still-inov Agency. Tous droits réservés.</p>
        <button
          onClick={handleLegalClick}
          className="text-blue-500 underline mt-2"
        >
          Mentions légales
        </button>
      </footer>

      {/* Popup pour les mentions légales */}
      {showLegalPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg relative w-full max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Mentions Légales</h3>
            <p>
              <strong>Propriétaire :</strong> Still Inov Agency, stillinov.com <br />
              <strong>Contact :</strong> Stillinovagency@gmail.com<br />
              <strong>Responsable :</strong> Stéphane Dei-Negri<br />
              <strong>Adresse :</strong> Saint-Caprais-de-Bordeaux<br />
              <strong>Hébergement :</strong> Le site est hébergé par Vercel.<br />
              <strong>Utilisation des cookies :</strong> Les cookies sont utilisés pour les statistiques du site.<br />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
