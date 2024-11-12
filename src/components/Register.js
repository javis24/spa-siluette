import { useState } from 'react';
import axios from 'axios';

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    password: '',
    role: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/users', formData);
      setMessage('Usuario registrado con éxito');
      setFormData({ name: '', age: '', phone: '', email: '', password: '', role: '' });
    } catch (error) {
      setMessage('Error al registrar el usuario');
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl relative">
        <button
                onClick={onClose} // Usa onClose en lugar de setShowPopup
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
            </button>
    <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Registrar Usuario</h2>

    {message && <p className="text-center text-green-500 mb-4">{message}</p>}

    <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-green-600 font-semibold">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="age" className="text-green-600 font-semibold">Edad</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-green-600 font-semibold">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-green-600 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-green-600 font-semibold">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="text-green-600 font-semibold">Rol</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-gray-200 border-2 border-gray-500 focus:border-green-500 outline-none"
          required
        >
          <option value="">Seleccione un rol</option>
          <option value="admin">Admin</option>
          <option value="secretary">Secretaria</option>
          <option value="clientes">Cliente</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full col-span-1 md:col-span-3 py-3 mt-4 bg-gray-700 text-white rounded-full font-semibold transition-colors hover:bg-green-500 hover:text-gray-700"
      >
        Registrar
      </button>
    </form>
  </div>
</div>


  );
};

export default Register;
