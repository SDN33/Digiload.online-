'use client'; // Ajoutez ceci au début du fichier

import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">DigiLoad.online</div>

      {/* Menu hamburger pour mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menu de navigation pour grand écran */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/"><a className="hover:text-gray-300">Accueil</a></Link>
      </nav>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white">
          <ul className="flex flex-col space-y-4 items-center p-4">
            <li><Link href="/"><a onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Accueil</a></Link></li>
            <li><Link href="/contact"><a onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Contact</a></Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
