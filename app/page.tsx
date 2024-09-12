import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

const Home: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleStep1Click = () => {
    setStep1Completed(true);
  };

  const handleStep2Click = () => {
    setStep2Completed(true);
  };

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
            </h2>
            <br />
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
          <svg
            width="300"
            height="300"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white opacity-70 md:w-96 md:h-96"
          >
            <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="4" />
            <path
              d="M100 100 Q150 50 200 100 T300 100"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M100 300 Q150 250 200 300 T300 300"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M200 100 L200 300"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d="M100 200 L300 200"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>
      </main>

      {/* Footer */}
      <Footer />

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
                  onClick={handleStep1Click}
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
                  onClick={handleStep2Click}
                >
                  Cliquer à nouveau ici
                </a>
              </li>
            </ul>
            {step1Completed && step2Completed ? (
              <div className="mt-6 text-center">
                <Link href="https://www.canva.com/pro">
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
                Vous devez compléter les deux étapes pour débloquer le lien.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
