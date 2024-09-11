import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center box-border">
      <div className="flex items-center">
        <span className="ml-4 text-lg font-semibold">DigiLoad.xyz</span>
      </div>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/"><a className="hover:text-gray-300">Accueil</a></Link></li>
          <li><Link href="/about"><a className="hover:text-gray-300">Nos Formations</a></Link></li>
          <li><Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link></li>
          <li>
            <Link href="/try">
              <a className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-100 transition">
                Essayer maintenant
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
