"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  // Fonction pour détecter le bloqueur de publicités
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
        break;
      case 2:
        setTimeout(() => setStep2Completed(true), 5000); // délai de 5 secondes
        break;
      case 3:
        setTimeout(() => setStep3Completed(true), 5000); // délai de 5 secondes
        break;
      default:
        break;
    }
  };

  // Validation des étapes en fonction du détecteur de bloqueur de pub
  const validateSteps = useCallback(() => {
    if (!adBlockerDetected) {
      setTimeout(() => setStep1Completed(true), 5000);
    }
  }, [adBlockerDetected]);

  useEffect(() => {
    validateSteps();
  }, [validateSteps]);

  return (
    <div className="flex flex-col h-[110vh] bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white">
      <Header />

      {/* Avertissement adblock */}
      {adBlockerDetected && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 text-center">
          Bloqueur de publicités détecté. Veuillez le désactiver pour accéder à toutes les fonctionnalités du site.
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 relative">
        {/* Bannière de texte */}
        <div className="absolute top-0 left-0 bg-green-500 text-white py-2 px-4 transform -rotate-45 origin-top-left">
          <span className="text-sm font-bold whitespace-nowrap">
            👉 100% légal, 100% sûr ! 👈
          </span>
        </div>

        <main className="flex flex-1 flex-col md:flex-row items-center">
          <div className="flex-1 flex items-center justify-center p-8 md:p-16 mt-[-4rem] md:mt-[-1rem]">
            <div className="text-center space-y-4 md:space-y-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={300}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">
                  La communauté des utilisateurs de Canva
                </h1>
              </div>
              <button
                className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                onClick={() => setShowPopup(true)}
              >
                Canva Pro Gratuit
              </button>
              <h2 className="text-lg md:text-lg font-light leading-tight mt-4">
                ✨ Accédez à Canva Pro <strong> Gratuitement</strong>✨
                <br />
                <small>en 1 min chrono !</small>
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16">
            {/* Illustration SVG */}
            <svg
              width="300"
              height="300"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white opacity-70 md:w-96 md:h-96"
            >
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="10s"
                  repeatCount="indefinite"
                />
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="4" />
                <path
                  d="M100 100 Q150 50 200 100 T300 100"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M100 300 Q150 250 200 300 T300 300"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M200 100 L200 300"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  d="M100 200 L300 200"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </div>
        </main>

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
              <h3 className="text-lg font-bold mb-4">Étapes pour obtenir Canva Pro Gratuit</h3>
              <ul className="space-y-4">
                <li className={`flex items-center ${step1Completed ? "text-green-600" : ""}`}>
                  {step1Completed ? "✔️" : "➤"} Étape 1:
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
                  {step2Completed ? "✔️" : "➤"} Étape 2:
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
                  {step3Completed ? "✔️" : "➤"} Étape 3:
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
              {step1Completed && step2Completed && step3Completed ? (
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
                <div className="mt-6 text-center text-red-500">
                  Vous devez compléter les trois étapes pour débloquer le lien.
                  <br />
                  <small>(Si le lien ne fonctionne pas, désactivez votre bloqueur de publicités)</small>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
