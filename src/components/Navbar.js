import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = ({ userRole }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Aquí debes añadir la lógica para cerrar sesión (por ejemplo, borrar tokens)
    console.log("Cerrando sesión...");
    router.push('/login'); // Redirigir al login después de logout
  };

  return (
    <aside className="w-64 h-full bg-white-800 text-black fixed top-0 left-0 flex flex-col">
      <div className="p-4 font-bold text-lg border-b border-gray-700">
        SiluettePlusJc
      </div>

      <nav className="flex-grow p-4 space-y-2">
        <a href="/" className="block p-2 rounded hover:bg-gray-700">
          Inicio
        </a>
        <a href="/profile" className="block p-2 rounded hover:bg-gray-700">
          Perfil
        </a>

        {/* Mostrar enlaces adicionales según el rol del usuario */}
            <>
            <a href="/admin/dashboard" className="block p-2 rounded hover:bg-gray-700">
              Dashboard Admin
            </a>
            <a href="/admin/users" className="block p-2 rounded hover:bg-gray-700">
              Usuarios
            </a>
          </>
       
        
                <a href="/secretary/clients" className="block p-2 rounded hover:bg-gray-700">
            Clientes
          </a>
       
             <a href="/client/progress" className="block p-2 rounded hover:bg-gray-700">
            Mis Avances
          </a>
      
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
