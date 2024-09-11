import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
/>

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-600 text-white">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row items-center justify-center p-8 md:p-16">
        {/* Section gauche avec le bouton */}
        <div className="flex-1 flex items-center justify-center text-center p-4 md:p-8 space-y-6 md:space-y-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 leading-tight">
            Découvrez Canva Pro <br className="hidden md:block" /> Gratuitement
          </h1>
          <Link href="https://www.canva.com/pro">
            <a
              className="bg-white text-blue-800 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canva Pro Gratuit
            </a>
          </Link>
        </div>

        {/* Section droite avec le design SVG */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <svg
            width="350"
            height="350"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white opacity-80"
          >
            <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="6" />
            <path
              d="M100 100 Q150 50 200 100 T300 100"
              stroke="white"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M100 300 Q150 250 200 300 T300 300"
              stroke="white"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M200 100 L200 300"
              stroke="white"
              strokeWidth="6"
            />
            <path
              d="M100 200 L300 200"
              stroke="white"
              strokeWidth="6"
            />
            {/* Ajout des lettres "CFP" */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize="60"
              fontFamily="Oxygen, sans-serif"
              fontWeight="bold"
            >
              CFP
            </text>
          </svg>
          <Image
            src="/images/logo.png" // Assurez-vous de placer votre logo dans le dossier public/images
            alt="Still-inov Formation Logo"
            width={150}
            height={40}
            className="mt-8 md:mt-12"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
