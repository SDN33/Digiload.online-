"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import { Analytics } from "@vercel/analytics/react";
import { Circle } from 'lucide-react';

const Home: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    switch (step) {
      case 1:
        setStep1Completed(true);
        setLoading(false);
        break;
      case 2:
        setTimeout(() => {
          setStep2Completed(true);
          setLoading(false);
        }, 4000);
        break;
      case 3:
        setTimeout(() => {
          setStep3Completed(true);
          setLoading(false);
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

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");

    if (storedCount) {
      setCompletedCount(parseInt(storedCount, 10));
    } else {
      localStorage.setItem("visitorCount", "217");
      setCompletedCount(217);
    }
  }, []);

  useEffect(() => {
    if (step1Completed && step2Completed && step3Completed) {
      const newCount = completedCount + 1;
      setCompletedCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
    }
  }, [step1Completed, step2Completed, step3Completed]);

  const totalSteps = 3;
  const completedSteps = [step1Completed, step2Completed, step3Completed].filter(Boolean).length;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="flex flex-col h-[110vh] bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white overflow-x-hidden">
      <Header />

      {adBlockerDetected && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 text-center">
          Bloqueur de publicités détecté. Veuillez le désactiver pour accéder à toutes les fonctionnalités du site.
        </div>
      )}

      <main className="flex flex-1 flex-col md:flex-row items-center relative">
        {/* Partie de droite avec le texte et le bouton */}
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

        {/* SVG animé dans le pop-up */}
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          {showPopup && (
            <div className="bg-white text-black p-8 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
              <div className="flex items-center justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="none"
                  className="w-64 h-64 mb-4"
                >
                  <circle cx="50" cy="50" r="40" stroke="#ffffff" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#00ff00"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                    className="animate-progress"
                  />
                </svg>
                <style jsx>{`
                  .animate-progress {
                    animation: dash 2s ease-in-out infinite;
                  }

                  @keyframes dash {
                    0% {
                      stroke-dashoffset: 251.2;
                    }
                    50% {
                      stroke-dashoffset: 125.6;
                      transform: rotate(180deg);
                    }
                    100% {
                      stroke-dashoffset: 251.2;
                      transform: rotate(360deg);
                    }
                  }
                `}</style>
              </div>
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
                    Voir la pub
                  </a>
                </li>
                <li className={`flex items-center ${step2Completed ? "text-green-600" : ""}`}>
                  {step2Completed ? "✔️" : "➤"} PUB 2:
                  <a
                    href="https://upodaitie.net/4/8083520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                    onClick={() => handleStepClick(2)}
                  >
                    Voir la pub
                  </a>
                </li>
                <li className={`flex items-center ${step3Completed ? "text-green-600" : ""}`}>
                  {step3Completed ? "✔️" : "➤"} PUB 3:
                  <a
                    href="https://upodaitie.net/4/8083530"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                    onClick={() => handleStepClick(3)}
                  >
                    Voir la pub
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <div className="bg-white text-blue-700 py-4 text-center px-6 inline-block mx-auto rounded-lg shadow-lg mb-8">
        <p className="text-sm font-bold animate-pulse">
          🎉 {completedCount + 217} digiloaders nous ont déjà fait confiance ! 🎉
        </p>
      </div>

      <Footer />
      <Cookies />
      <Analytics />
    </div>
  );
};

export default Home;
