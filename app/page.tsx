"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
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
  const [loading, setLoading] = useState(false); // Nouvel état pour le chargement

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
    setLoading(true); // Active l'état de chargement

    switch (step) {
      case 1:
        setStep1Completed(true);
        setLoading(false); // Désactive le chargement immédiatement pour l'étape 1
        break;
      case 2:
        setTimeout(() => {
          setStep2Completed(true);
          setLoading(false); // Désactive le chargement après 4 secondes pour l'étape 2
        }, 4000);
        break;
      case 3:
        setTimeout(() => {
          setStep3Completed(true);
          setLoading(false); // Désactive le chargement après 4 secondes pour l'étape 3
        }, 4000);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (step1Completed && step2Completed && step3Completed) {
      setCompletedCount((prevCount) => prevCount + 1);
    }
  }, [step1Completed, step2Completed, step3Completed]);

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
                width={300}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <h1 className="text-lg md:text-2xl font-bold leading-tight mt-2">
                La communauté francophone de Canva
              </h1>
            </div>
            <button
              className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
              onClick={() => setShowPopup(true)}
            >
              Canva Pro Gratuit
            </button>
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
                  dur="10s"
                  repeatCount="indefinite"
                />

                {/* Flèche du haut */}
                <path d="M200 80 L220 120 L180 120 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>

                {/* Flèche du bas */}
                <path d="M200 320 L220 280 L180 280 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </main>
      <div
        className="bg-white text-blue-700 py-4 text-center px-6 inline-block mx-auto rounded-lg shadow-lg mb-8"
      >
        <p className="text-sm font-bold animate-pulse">
          {completedCount + 217} digiloaders nous ont déjà fait confiance ! 🎉
        </p>
      </div>
      <Footer />
      <Cookies />
      <Analytics />

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4 text-center">Étapes pour obtenir Canva Pro Gratuit</h3>
            <ul className="space-y-4">
              <li className={`flex items-center ${step1Completed ? "text-green-600" : ""}`}>
                {step1Completed ? "✔️" : "➤"} PUB 1:
                <a
                  href="https://upodaitie.net/4/8083510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline ml-2"
                  onClick={() => handleStepClick(1)}
                >
                  Cliquer ici
                </a>
              </li>
              <li className={`flex items-center ${step2Completed ? "text-green-600" : ""}`}>
                {step2Completed ? "✔️" : "➤"} PUB 2:
                <a
                  href="https://upodaitie.net/4/8083510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline ml-2"
                  onClick={() => handleStepClick(2)}
                >
                  Cliquer à nouveau ici
                </a>
              </li>
              <li className={`flex items-center ${step3Completed ? "text-green-600" : ""}`}>
                {step3Completed ? "✔️" : "➤"} PUB 3:
                <a
                  href="https://upodaitie.net/4/8083510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline ml-2"
                  onClick={() => handleStepClick(3)}
                >
                  Cliquer une dernière fois ici
                </a>
              </li>
            </ul>
            {loading ? (
              <div className="mt-6 text-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-700" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              </div>
            ) : step1Completed && step2Completed && step3Completed ? (
              <div className="mt-6 text-center">
                <Link href="https://www.canva.com/brand/join?token=JkkkZ4CaA0bbSyjqvJ8lZw&referrer=team-invite">
                  <a
                    className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accéder à Canva Pro
                  </a>
                </Link>
              </div>
            ) : (
              <div className="mt-6 text-center text-black ">
                Vous devez compléter les trois étapes pour débloquer le lien, ne trichez pas ! 😉
                <br />
                <small className="text-red-500">(Si le lien ne fonctionne pas, désactivez votre bloqueur de publicités)</small>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
