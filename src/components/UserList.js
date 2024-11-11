import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app/globals.css';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUpdate = (id) => {
    // Lógica de actualización
    console.log('Actualizar usuario con ID:', id);
  };

  const handleDelete = async (id) => {
    // Lógica de eliminación
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter(user => user.uuid !== id));
      setFilteredUsers(filteredUsers.filter(user => user.uuid !== id));
    } catch (error) {
      console.error('Error eliminando usuario:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Lista de Usuarios</h2>

      {/* Buscador */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded w-1/2 text-center"
        />
      </div>

      {/* Tabla de Usuarios */}
      <div className="flex justify-center">
        <table className="min-w-[80%] bg-white border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Rol</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.uuid}>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleUpdate(user.uuid)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
                  >
                    Actualizar
                  </button>
                  <button
                    onClick={() => handleDelete(user.uuid)}
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
    </div>
  );
};

export default UserList;
