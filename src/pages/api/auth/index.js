// pages/api/auth/index.js
import db from '../../../config/database';
import Users from '../../../models/UserModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Buscar usuario por correo electrónico
      const user = await Users.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }

      // Validar contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      // Crear el token JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // El token expira en 1 hora
      );

      res.status(200).json({ token, message: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
