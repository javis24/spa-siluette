import React, { useState } from 'react';
import axios from 'axios';

const AddClientForm = ({ onClose }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleAddClient = async () => {
    try {
      await axios.post('/api/clients', newClient);
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
      onClose(); // Close the popup after adding the client
    } catch (error) {
      console.error('Error agregando cliente:', error);
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4 text-center">Agregar Nuevo Cliente</h3>
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
        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Cancelar
        </button>
        <button type="button" onClick={handleAddClient} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default AddClientForm;
