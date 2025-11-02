// src/components/Footer.jsx
const Footer = () => (
  <footer className="py-8 text-center border-t border-gray-800">
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Akshay. Built with{" "}
      <span className="text-blue-400">React</span> &{" "}
      <span className="text-purple-400">Tailwind CSS</span>
    </p>
  </footer>
);
export default Footer;
