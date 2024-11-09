import Image from "next/image";
import Link from 'next/link';


const Header = () => {
  return (
    <header className="header-top w-full">
      {/* Barra superior con información de contacto y redes sociales */}
      <div className="top-bar flex flex-col md:flex-row items-center md:items-start justify-between bg-[#dfd299] p-2 text-[#cbaa3d]">
      <div className="contact-info flex flex-col md:flex-row items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
        <span><i className="fas fa-envelope"></i> cursos@silluet.com</span>
        <span><i className="fas fa-phone"></i> (654) 321-7654</span>
        <span><i className="fas fa-map-marker-alt"></i> Dirección Col. Villa Jardin, Calle. Flor De Durazno #1011</span>
        <span><i className="fas fa-map-marker-alt"></i> Teléfono 871 333 0566</span>
      </div>
      <div className="social-icons flex justify-center space-x-2 text-xl mt-2 md:mt-0">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
   {/* Barra principal con logo, título y botón */}
   <div className="main-bar flex flex-col md:flex-row justify-between items-center h-auto md:h-24 bg-white p-4">
    <div className="logo mb-2 md:mb-0">
    <Image src="/img/silluet_logo.png" alt="Logo" width={100} height={100} />
    </div>
    <div className="logo text-center md:text-left text-[#cbaa3d] text-xl font-great-vibes italic">
      <p>Siluette Plus JC</p>
      <span className="text-[#9b5ab7] font-fira-sans italic font-semibold">beauty and health</span>
    </div>
    <div className="info mt-2 md:mt-0">
      <button className="quote-btn bg-[#9b5ab7] text-white px-4 py-2 rounded-md uppercase">body tanda max</button>
    </div>
  </div>

  {/* Barra de navegación */}
  <nav className="navbar flex justify-center bg-[#cbaa3d] p-2 rounded-lg shadow-md">
    <ul className="navbar-list flex flex-col md:flex-row md:space-x-4 text-white text-lg font-semibold">
      <li className="mb-2 md:mb-0"><a href="#home">Home</a></li>
      <li className="mb-2 md:mb-0"><a href="#cursos">Cursos</a></li>
      <li className="mb-2 md:mb-0"><a href="#servicios">Servicios</a></li>
      <li><Link href="/login">Regístrate</Link></li>
    </ul>
  </nav>
</header>

  );
};

export default Header;
