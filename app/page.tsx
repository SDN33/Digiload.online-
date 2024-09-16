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
  const [completedCount, setCompletedCount] = useState(132); // Initialisation à 132

  // Détection du bloqueur de pub
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

  // Gestion des étapes
  const handleStepClick = (step: number) => {
    switch (step) {
      case 1:
        setStep1Completed(true);
        break;
      case 2:
        setTimeout(() => setStep2Completed(true), 4000);
        break;
      case 3:
        setTimeout(() => setStep3Completed(true), 4000);
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
              ✨ Accédez à Canva Pro <strong> Gratuitement</strong>✨
              <br />
              <small>en 1 min seulement !</small>
            </h2>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16">
          {/* Ajout du SVG ici */}
        </div>
      </main>

      <div className="bg-white text-blue-700 py-4 text-center">
        <p className="text-lg font-bold">
          {completedCount} digiloaders nous ont déjà fait confiance !
        </p>
      </div>

      <Footer />
      <Cookies />
      <Analytics />

      {/* Popup logic here */}
    </div>
  );
};

export default Home;
