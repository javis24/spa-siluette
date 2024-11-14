import { useEffect, useState } from 'react';
import axios from 'axios';

const ClientProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await axios.get('/api/profiles/[id]', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Cargando...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Perfil de Usuario</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Nombre:</h2>
          <p className="text-gray-600">{userData.user?.name}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Correo:</h2>
          <p className="text-gray-600">{userData.user?.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Dirección:</h2>
          <p className="text-gray-600">{userData.address}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Teléfono:</h2>
          <p className="text-gray-600">{userData.phone}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Fecha de Valoración:</h2>
          <p className="text-gray-600">{userData.evaluationDate}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Edad:</h2>
          <p className="text-gray-600">{userData.age}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Estatura:</h2>
          <p className="text-gray-600">{userData.height}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Alimento No Deseado:</h2>
          <p className="text-gray-600">{userData.unwantedFood}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
