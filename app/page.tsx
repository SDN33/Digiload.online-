"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import { Analytics } from "@vercel/analytics/react";

const Home: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [adClickCount, setAdClickCount] = useState(0);

  // Fonction pour détecter le bloqueur de pub
  const detectAdBlocker = useCallback(() => {
    const testAd = document.createElement("div");
    testAd.innerHTML = "&nbsp;";
    testAd.className = "adsbox";
    document.body.appendChild(testAd);
    window.setTimeout(() => {
      if (testAd.offsetHeight === 0) {
        setAdBlockerDetected(true);
      }
      document.body.removeChild(testAd);
    }, 100);
  }, []);

  useEffect(() => {
    detectAdBlocker();
  }, [detectAdBlocker]);

  const handleStepClick = (step: number) => {
    switch (step) {
      case 1:
        setStep1Completed(true);
        setAdClickCount((prevCount) => prevCount + 1);
        break;
      case 2:
        setTimeout(() => {
          setStep2Completed(true);
        }, 4000);
        break;
      case 3:
        setTimeout(() => {
          setStep3Completed(true);
        }, 4000);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (adClickCount >= 3 && step1Completed && step2Completed && step3Completed) {
      setCompletedCount((prevCount) => prevCount + 1);
    }
  }, [adClickCount, step1Completed, step2Completed, step3Completed]);

  // Fonction pour gérer le compteur de visiteurs avec localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");

    if (storedCount) {
      setCompletedCount(parseInt(storedCount, 10)); // Charge le nombre stocké dans localStorage
    } else {
      localStorage.setItem("visitorCount", "217"); // Initialisation à 217 si aucune donnée
      setCompletedCount(217); // Assure que le compteur commence à 217
    }
  }, []);

  useEffect(() => {
    if (adClickCount >= 3 && step1Completed && step2Completed && step3Completed) {
      const newCount = completedCount + 1;
      setCompletedCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString()); // Mise à jour de localStorage avec le nouveau compte
    }
  }, [adClickCount, step1Completed, step2Completed, step3Completed, completedCount]);

  return (
    <div className="flex flex-col h-[110vh] bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white overflow-x-hidden">
      <Header />

      {/* Avertissement adblock */}
      {adBlockerDetected && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 text-center">
          Bloqueur de publicités détecté. Veuillez le désactiver pour accéder à toutes les fonctionnalités du site.
        </div>
      )}

      <main className="flex flex-1 flex-col md:flex-row items-center">
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 mt-[-3rem] md:mt-[-2rem]">
          <div className="text-center space-y-4 md:space-y-8">
            <div className="flex flex-col items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={400}
                height={200}
                style={{ objectFit: "contain" }}
              />
              <h1 className="text-lg md:text-2xl font-bold leading-tight mt-2">
                La communauté francophone de Canva
              </h1>
            </div>
            <button
              className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
              onClick={() => handleStepClick(1)}
            >
              Cliquez ici pour la pub
            </button>
            {adClickCount >= 3 && (
              <button
                className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                onClick={() => setShowPopup(true)}
              >
                Canva Pro Gratuit
              </button>
            )}
            <h2 className="text-sm md:text-lg font-light leading-tight mt-4">
              ✨ Accédez à Canva Pro <strong> Gratuitement </strong>✨
              <br />
              <small>en 1 min seulement !</small>
            </h2>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 400 400"
          >
            <style jsx>{`
              .bounce {
                animation: bounce 2s infinite;
              }
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
            `}</style>

            <g>
              {/* Rotation du cercle */}
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 200"
                to="360 200 200"
                dur="20s"
                repeatCount="indefinite"
              />

              {/* Cercle principal */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="4">
                <animate attributeName="r" values="150;155;150" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Lignes décoratives */}
              <path d="M100 100 Q150 50 200 100 T300 100" fill="none" stroke="currentColor" strokeWidth="4">
                <animate
                  attributeName="d"
                  values="M100 100 Q150 50 200 100 T300 100;
                          M100 110 Q150 60 200 110 T300 110;
                          M100 100 Q150 50 200 100 T300 100"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              <path d="M100 300 Q150 250 200 300 T300 300" fill="none" stroke="currentColor" strokeWidth="4">
                <animate
                  attributeName="d"
                  values="M100 300 Q150 250 200 300 T300 300;
                          M100 290 Q150 240 200 290 T300 290;
                          M100 300 Q150 250 200 300 T300 300"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Lignes centrales */}
              <line x1="200" y1="100" x2="200" y2="300" stroke="currentColor" strokeWidth="4">
                <animate attributeName="y2" values="300;290;300" dur="4s" repeatCount="indefinite" />
              </line>

              <line x1="100" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="4">
                <animate attributeName="x2" values="300;290;300" dur="4s" repeatCount="indefinite" />
              </line>

              {/* Petit cercle central */}
              <circle cx="200" cy="200" r="15" fill="currentColor" className="bounce">
                <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Flèches */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="-360 200 200"
                  dur="6s"
                  repeatCount="indefinite"
                />
                <path d="M190 170 L210 170 L200 150 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M230 190 L230 210 L250 200 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </main>

      {/* Popup pour Canva */}
      {completedCount >= 1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg relative max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Canva Pro Gratuit</h2>
            <p className="mb-4">
              Profitez de Canva Pro gratuitement grâce à notre offre spéciale ! <br />
              Enregistrez-vous maintenant et bénéficiez de tous les avantages de Canva Pro.
            </p>
            <a
              href="https://www.canva.com/brand/join?token=JkkkZ4CaA0bbSyjqvJ8lZw&referrer=team-invite"
              className="btn bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à l'offre
            </a>
          </div>
        </div>
      )}

      <Footer />
      <Cookies />
      <Analytics />
    </div>
  );
};

export default Home;
