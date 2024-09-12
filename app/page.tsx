"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const Home: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  useEffect(() => {
    // Function to detect ad blocker
    const detectAdBlocker = () => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      document.body.appendChild(testAd);
      window.setTimeout(() => {
        if (testAd.offsetHeight === 0) {
          setAdBlockerDetected(true);
        }
        document.body.removeChild(testAd);
      }, 100);
    };

    detectAdBlocker();
  }, []);

  const handleStepClick = (step: number) => {
    switch (step) {
      case 1:
        setStep1Completed(true);
        break;
      case 2:
        setStep2Completed(true);
        break;
      case 3:
        setStep3Completed(true);
        break;
    }
  };

  const validateSteps = () => {
    if (!adBlockerDetected) {
      // Delay validation for 5 seconds
      setTimeout(() => {
        setStep1Completed(true);
        setStep2Completed(true);
        setStep3Completed(true);
      }, 5000);
    }
  };

  useEffect(() => {
    validateSteps();
  }, [adBlockerDetected]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row items-center">
        {/* Section gauche avec le bouton */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 mt-[-2rem] md:mt-[-4rem]">
          <div className="text-center space-y-4 md:space-y-8">
            {/* Remplacer le h1 par l'image */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={300}
                height={100}
                objectFit="contain"
              />
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">
                La communauté des utilisateurs de Canva
              </h1>
            </div>
            <h2 className="text-lg md:text-lg font-light leading-tight mt-4">
              Obtenez Canva Pro<strong> Gratuitement</strong>
              <br /><small>en 1 min chrono !</small>
            </h2>
            <button
              className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
              onClick={() => setShowPopup(true)}
            >
              Canva Pro Gratuit
            </button>
          </div>
        </div>

        {/* Section droite avec le design SVG */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        
          <rect width="400" height="400" fill="none"/>
        
          <circle cx="200" cy="200" r="150" stroke="white" stroke-width="4" fill="none" filter="url(#glow)"/>
        
          <path d="M100 100 Q150 50 200 100 T300 100" stroke="white" stroke-width="4" fill="none" filter="url(#glow)"/>
          <path d="M100 300 Q150 250 200 300 T300 300" stroke="white" stroke-width="4" fill="none" filter="url(#glow)"/>
        
          <path d="M200 100 L200 300" stroke="white" stroke-width="4" filter="url(#glow)"/>
          <path d="M100 200 L300 200" stroke="white" stroke-width="4" filter="url(#glow)"/>
        
          <circle cx="200" cy="200" r="20" fill="white" opacity="0.7"/>
        
          <g transform="rotate(45 200 200)">
            <rect x="180" y="180" width="40" height="40" fill="white" opacity="0.5"/>
          </g>
        
          <path d="M50 50 L100 50 L75 25 Z" fill="white" opacity="0.7"/>
          <path d="M350 50 L300 50 L325 25 Z" fill="white" opacity="0.7"/>
          <path d="M50 350 L100 350 L75 375 Z" fill="white" opacity="0.7"/>
          <path d="M350 350 L300 350 L325 375 Z" fill="white" opacity="0.7"/>
        
          <text x="200" y="30" font-family="Arial" font-size="20" fill="white" text-anchor="middle" opacity="0.9">Design Complexe</text>
        </svg>
        </div>
      </main>

      {/* Footer */}
      <Footer />
      <Analytics  />



      {/* Pop-up */}
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
              <li className={`flex items-center ${step1Completed ? 'text-green-600' : ''}`}>
                {step1Completed ? '✔️' : '➤'} Étape 1:
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
              <li className={`flex items-center ${step2Completed ? 'text-green-600' : ''}`}>
                {step2Completed ? '✔️' : '➤'} Étape 2:
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
              <li className={`flex items-center ${step3Completed ? 'text-green-600' : ''}`}>
                {step3Completed ? '✔️' : '➤'} Étape 3:
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
  );
};

export default Home;
