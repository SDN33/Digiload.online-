// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/images/logo.png" // Assurez-vous de placer votre logo dans le dossier public/images
          alt="Still-inov Formation Logo"
          width={150}
          height={40}
        />
        <span className="ml-4 text-lg font-semibold">CanvaFrancePro</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/"><a className="hover:text-gray-300">Home</a></Link></li>
          <li><Link href="/about"><a className="hover:text-gray-300">About</a></Link></li>
          <li><Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
