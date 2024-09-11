// components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-700 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Still-inov Agency. Tout droits réservés.</p>
    </footer>
  );
};

export default Footer;
