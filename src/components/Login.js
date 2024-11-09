import { useState } from 'react';
import '../app/globals.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin} 
        className="flex flex-col items-center gap-4 w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email" className="text-green-600 font-semibold">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password" className="text-green-600 font-semibold">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
            required
          />
        </div>
        <div className="w-full text-right">
          <a href="#" className="text-gray-600 hover:text-green-500">Olvidaste tu contraseña :-(</a>
        </div>
        <button 
          type="submit" 
          className="w-full py-3 mt-4 bg-gray-700 text-white rounded-full font-semibold transition-colors hover:bg-green-500 hover:text-gray-700"
        >
          Entrar
        </button>
        <div className="text-gray-700">
          ¿Te gustaría una sesión con SiluettePlusJC?{" "}
          <button
            type="button"
            onClick={() => setShowPopup(true)}
            className="text-green-500 hover:underline"
          >
            Inscríbete
          </button>
        </div>
      </form>
    {/* Popup del Formulario */}
    {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Inscríbete</h2>
            <div className="appointment-form bg-[#9b5ab7] text-white p-10">
                  <h2 className="text-2xl mb-2">Inscribete  <span className="italic">a nuestros cursos</span></h2>
                  <form className="space-y-4">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" className="w-full p-2 rounded text-black" required />
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" className="w-full p-2 rounded text-black" required />
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" className="w-full p-2 rounded text-black" required />
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="3" className="w-full p-2 rounded text-black" required></textarea>
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded">Enviar Whatsapp</button>
                  </form>
                </div>   
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
