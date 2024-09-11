import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 text-white">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row">
        {/* Section gauche avec le bouton */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center space-y-4 md:space-y-8">
            <h1 className="text-4xl font-bold mb-8">Decouvrez Canva Pro Gratuitement</h1>
            <Link href="https://www.canva.com/pro">
              <a
                className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canva Pro Gratuit
              </a>
            </Link>
          </div>
        </div>

        {/* Section droite avec le design SVG */}
        <div className="flex-1 flex items-center justify-center p-8">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white opacity-70"
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
          <Image
            src="/images/logo.png" // Assurez-vous de placer votre logo dans le dossier public/images
            alt="Still-inov Formation Logo"
            width={150}
            height={40}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
