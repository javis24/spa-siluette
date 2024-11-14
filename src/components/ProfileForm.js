import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [profileData, setProfileData] = useState({
    address: '',
    phone: '',
    evaluationDate: '',
    age: '',
    height: '',
    unwantedFood: '',
  });
  const [message, setMessage] = useState('');

  // Cargar la lista de usuarios al cargar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      setMessage('Por favor, selecciona un usuario.');
      return;
    }

    try {
      const response = await axios.post(`/api/profiles/${selectedUserId}`, profileData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('Datos guardados correctamente');
    } catch (error) {
      setMessage('Error al guardar los datos');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Guardar Datos de Perfil</h2>
      
      <div className="mb-4">
        <label className="block font-semibold text-gray-700">Seleccionar Usuario:</label>
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccione un usuario</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} - {user.email}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Dirección:</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Fecha de Valoración:</label>
          <input
            type="date"
            name="evaluationDate"
            value={profileData.evaluationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Edad:</label>
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Estatura (cm):</label>
          <input
            type="number"
            name="height"
            value={profileData.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Alimento No Deseado:</label>
          <input
            type="text"
            name="unwantedFood"
            value={profileData.unwantedFood}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Guardar Datos
        </button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default ProfileForm;
