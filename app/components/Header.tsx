'use client'; // Ajoutez ceci au début du fichier

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={300}
          height={100}
          objectFit="contain"
        />
      </div>

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
        <Link href="/about"><a className="hover:text-gray-300">Nos Formations</a></Link>
        <Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link>
        <Link href="/try">
          <a className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-300 transition duration-300 ease-in-out">
            Essayer maintenant
          </a>
        </Link>
      </nav>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white">
          <ul className="flex flex-col space-y-4 items-center p-4">
            <li><Link href="/"><a onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Accueil</a></Link></li>
            <li><Link href="/about"><a onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Nos Formations</a></Link></li>
            <li><Link href="/contact"><a onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Contact</a></Link></li>
            <li>
              <Link href="/try">
                <a onClick={() => setIsMenuOpen(false)} className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-400 transition duration-300 ease-in-out">
                  Essayer maintenant
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
