import Card from '../components/Card';
import '../app/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Register from '../components/Register';
import AddClientForm from '../components/AddClientForm';

const Dashboard = () => {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isClientPopupOpen, setIsClientPopupOpen] = useState(false);

  useEffect(() => {
    // Llama a la API para obtener la lista de clientes
    fetch('/api/clients')
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  useEffect(() => {
    // Filtrar clientes según el término de búsqueda
    setFilteredClients(
      clients.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, clients]);

  const handleNavigateToUserList = () => {
    router.push('/usuarios'); // Navega al componente UserList
  };

  const handleOpenRegisterPopup = () => {
    setIsRegisterPopupOpen(true); // Abre el popup de registro
  };

  const handleCloseRegisterPopup = () => {
    setIsRegisterPopupOpen(false); // Cierra el popup de registro
  };

  const handleNavigateToClientProfile = (clientId) => {
    router.push(`/client/${clientId}`); // Navega al perfil del cliente
  };

  const handleOpenClientPopup = () => {
    setIsClientPopupOpen(true);
  };

  const handleCloseClientPopup = () => {
    setIsClientPopupOpen(false);
  };

  const cardsData = [
    {
      title: "Clientes Activos",
      content: (
        <button
          onClick={handleNavigateToUserList}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver Clientes Activos
        </button>
      ),
    },
    {
      title: "Buscar Clientes",
      content: (
        <div>
          <input
            type="text"
            placeholder="Buscar cliente por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <ul>
            {filteredClients.map((client) => (
              <li key={client.id} className="flex justify-between items-center border-b py-2">
                <span>{client.name}</span>
                <button
                  onClick={() => handleNavigateToClientProfile(client.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                >
                  Ver Perfil
                </button>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Registrar Usuario",
      content: (
        <button
          onClick={handleOpenRegisterPopup}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Registrar Usuario
        </button>
      ),
    },
    {
      title: "Agregar Cliente",
      content: (
        <button
          onClick={handleOpenClientPopup}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Agregar Cliente
        </button>
      ),
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
      {/* Popup de Registro */}
      {isRegisterPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl relative">
            <Register onClose={handleCloseRegisterPopup} />
          </div>
        </div>
      )}
        {/* Popup de Agregar Cliente */}
      {isClientPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[80%] max-w-4xl relative">
            <button
              onClick={handleCloseClientPopup}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <AddClientForm onClose={handleCloseClientPopup} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
