import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 bg-cover bg-center bg-no-repeat text-white">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row items-center">
        {/* Section gauche avec le bouton */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div className="text-center space-y-4 md:space-y-8 mt-16 md:-mt-12">
            <h1 className="text-5xl md:text-2xl font-bold leading-tight">
              DigiLoad<br />La Communautée Digital<br />
            </h1>
            <br />
            <Link href="https://www.canva.com/pro">
              <a
                className="btn bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canva Pro Gratuit
              </a>
            </Link>
            <br />
            <h2 className="text-sm font-bold mb-4 md:mb-8 leading-tight">
              Obtenez Canva Pro<strong> Gratuitement</strong>
            </h2>
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
      <Footer />
    </div>
  );
};

export default Home;
