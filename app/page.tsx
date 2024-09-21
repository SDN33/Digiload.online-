"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import PopupContent from "./components/PopupContent";
import Svg from "./components/Svg";
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";

const Home: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
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
        window.open("https://noohapou.com/4/8083510", "_blank"); // Ouvre dans un nouvel onglet
        break;
      case 2:
        setTimeout(() => {
          setStep2Completed(true);
          setLoading(false); // Désactive le chargement après 4 secondes pour l'étape 2
          window.open("https://noohapou.com/4/8083510", "_blank"); // Ouvre dans un nouvel onglet
        }, 4000);
        break;
      case 3:
        setTimeout(() => {
          setStep3Completed(true);
          setLoading(false); // Désactive le chargement après 4 secondes pour l'étape 3
          window.open("https://noohapou.com/4/8083510", "_blank"); // Ouvre dans un nouvel onglet
        }, 4000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col h-[110vh] bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white overflow-x-hidden animate-gradient-x">
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
          <Svg />
        </div>
      </main>

      <br />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 text-white">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-center mb-6"
            >
              Découvrez les avantages de <span className="text-yellow-300">Canva Pro</span>
            </motion.h2>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {[
                "Des milliers de modèles pour tous vos projets",
                "Des millions d'images et d'illustrations gratuites",
                "Des outils de design professionnels",
                "Des fonctionnalités avancées pour gagner du temps",
                "Des collaborations simplifiées",
                "Et bien plus encore..."
              ].map((item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center text-lg md:text-xl"
                >
                  <span className="text-yellow-500 mr-4">✨</span>
                  <span className="text-gray-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-gray-100 p-6 text-center"
          >
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Essayer Canva Pro gratuitement
            </a>
          </motion.div>
        </motion.div>
      </div>

      <Footer />

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <PopupContent
              setShowPopup={setShowPopup}
              step1Completed={step1Completed}
              step2Completed={step2Completed}
              step3Completed={step3Completed}
              handleStepClick={handleStepClick}
              loading={loading}
            />
          </div>
        </div>
      )}

      <Cookies />

      <Analytics />
    </div>
  );
};

export default Home;
