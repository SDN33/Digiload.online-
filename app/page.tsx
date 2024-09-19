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

  const progress = (completedCount - 217) * 33.33; // Calcul du progrès basé sur le compteur

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
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 200"
                to="360 200 200"
                dur="20s"
                repeatCount="indefinite"
              />
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="4">
                <animate attributeName="r" values="150;155;150" dur="4s" repeatCount="indefinite" />
              </circle>
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
              <line x1="200" y1="100" x2="200" y2="300" stroke="currentColor" strokeWidth="4">
                <animate attributeName="y2" values="300;290;300" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="4">
                <animate attributeName="x2" values="300;290;300" dur="4s" repeatCount="indefinite" />
              </line>
              <circle cx="200" cy="200" r="15" fill="currentColor" className="bounce">
                <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
              </circle>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="-360 200 200"
                  dur="10s"
                  repeatCount="indefinite"
                />
                <path d="M200 80 L220 120 L180 120 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M200 320 L220 280 L180 280 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M80 200 L120 180 L120 220 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M320 200 L280 180 L280 220 Z" fill="currentColor" className="bounce">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </main>

      <Footer />

      {/* Pop-up des tâches */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75 z-50">
          <div className="relative bg-white text-black p-8 rounded-lg w-11/12 max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h3 className="text-lg font-semibold mb-4">Avancement des tâches</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Circle className="w-5 h-5 mr-2" color={step1Completed ? "green" : "gray"} />
                <span>Étape 1: Complété</span>
              </div>
              <div className="flex items-center">
                <Circle className="w-5 h-5 mr-2" color={step2Completed ? "green" : "gray"} />
                <span>Étape 2: Complété</span>
              </div>
              <div className="flex items-center">
                <Circle className="w-5 h-5 mr-2" color={step3Completed ? "green" : "gray"} />
                <span>Étape 3: Complété</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <Cookies />
      <Analytics />
    </div>
  );
};

export default Home;
