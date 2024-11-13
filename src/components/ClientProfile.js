import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ClientProfile = () => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query; // Assumes you're passing client ID in the URL

  useEffect(() => {
    if (id) {
      // Fetch client data based on the client UUID from the API
      axios
        .get(`/api/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assumes token is stored in local storage
          },
        })
        .then((response) => {
          setClient(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching client data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Perfil de Cliente</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Nombre:</h2>
          <p className="text-gray-600">{client.name}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Dirección:</h2>
          <p className="text-gray-600">{client.address}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Teléfono:</h2>
          <p className="text-gray-600">{client.phone}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Correo:</h2>
          <p className="text-gray-600">{client.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Fecha de Valoración:</h2>
          <p className="text-gray-600">{client.evaluationDate}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Edad:</h2>
          <p className="text-gray-600">{client.age}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Estatura:</h2>
          <p className="text-gray-600">{client.height}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Aumento No Deseado:</h2>
          <p className="text-gray-600">{client.unwantedGain}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Patologías:</h2>
          <p className="text-gray-600">{client.pathologies}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
