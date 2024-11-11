import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Form state
  const [newClient, setNewClient] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    evaluationDate: '',
    age: '',
    height: '',
    unwantedGain: '',
    pathologies: '',
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/api/clients');
        setClients(response.data);
        setFilteredClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = clients.filter(client =>
      client.name.toLowerCase().includes(term)
    );
    setFilteredClients(filtered);
  };

  const handleUpdate = (id) => {
    console.log('Actualizar cliente con ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/clients/${id}`);
      setClients(clients.filter(client => client.uuid !== id));
      setFilteredClients(filteredClients.filter(client => client.uuid !== id));
    } catch (error) {
      console.error('Error eliminando cliente:', error);
    }
  };

  const handleAddClient = async () => {
    try {
      const response = await axios.post('/api/clients', newClient);
      setClients([...clients, response.data]);
      setFilteredClients([...filteredClients, response.data]);
      setShowPopup(false);
      setNewClient({
        name: '',
        address: '',
        phone: '',
        email: '',
        evaluationDate: '',
        age: '',
        height: '',
        unwantedGain: '',
        pathologies: '',
      });
    } catch (error) {
      console.error('Error agregando cliente:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Lista de Clientes</h2>

      {/* Buscador y botón para agregar */}
      <div className="flex justify-center mb-4 space-x-2">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded w-1/2 text-center"
        />
        <button
          onClick={() => setShowPopup(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Agregar Cliente
        </button>
      </div>

      {/* Tabla de Clientes */}
      <div className="flex justify-center">
      <table className="min-w-[80%] bg-white border border-gray-300 text-center">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b">Nombre</th>
      <th className="px-4 py-2 border-b">Dirección</th>
      <th className="px-4 py-2 border-b">Teléfono</th>
      <th className="px-4 py-2 border-b">Correo</th>
      <th className="px-4 py-2 border-b">Fecha de Valoración</th>
      <th className="px-4 py-2 border-b">Edad</th>
      <th className="px-4 py-2 border-b">Estatura</th>
      <th className="px-4 py-2 border-b">Aumento No Deseado</th>
      <th className="px-4 py-2 border-b">Patologías</th>
      <th className="px-4 py-2 border-b">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {filteredClients.map((client) => (
      <tr key={client.uuid}>
        <td className="px-4 py-2 border-b">{client.name}</td>
        <td className="px-4 py-2 border-b">{client.address}</td>
        <td className="px-4 py-2 border-b">{client.phone}</td>
        <td className="px-4 py-2 border-b">{client.email}</td>
        <td className="px-4 py-2 border-b">{client.evaluationDate}</td>
        <td className="px-4 py-2 border-b">{client.age}</td>
        <td className="px-4 py-2 border-b">{client.height}</td>
        <td className="px-4 py-2 border-b">{client.unwantedGain}</td>
        <td className="px-4 py-2 border-b">{client.pathologies}</td>
        <td className="px-4 py-2 border-b">
          <button
            onClick={() => handleUpdate(client.uuid)}
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
          >
            Actualizar
          </button>
          <button
            onClick={() => handleDelete(client.uuid)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>

      {/* Popup de agregar cliente */}
      {showPopup && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white p-6 rounded shadow-lg w-[80%] max-w-4xl">
         <h3 className="text-lg font-bold mb-4">Agregar Nuevo Cliente</h3>
         <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <input type="text" name="name" placeholder="Nombre" value={newClient.name} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="text" name="address" placeholder="Dirección" value={newClient.address} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="text" name="phone" placeholder="Teléfono" value={newClient.phone} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="email" name="email" placeholder="Correo" value={newClient.email} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="date" name="evaluationDate" placeholder="Fecha de Valoración" value={newClient.evaluationDate} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="number" name="age" placeholder="Edad" value={newClient.age} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="text" name="height" placeholder="Estatura" value={newClient.height} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <input type="text" name="unwantedGain" placeholder="Aumento No Deseado" value={newClient.unwantedGain} onChange={handleInputChange} className="w-full p-2 border rounded" />
           <textarea name="pathologies" placeholder="Patologías" value={newClient.pathologies} onChange={handleInputChange} className="w-full p-2 border rounded col-span-1 md:col-span-3" />
         </form>
         <div className="flex justify-end space-x-2 mt-4">
           <button type="button" onClick={() => setShowPopup(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
             Cancelar
           </button>
           <button type="button" onClick={handleAddClient} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
             Guardar
           </button>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default ClientList;
