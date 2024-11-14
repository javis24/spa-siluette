// api/clients/profile.js
import Users from '../../../models/UserModel';
import { authenticateToken } from '../middleware/verifyToken';

export default async (req, res) => {
  authenticateToken(req, res, async () => {
    try {
      // Obtener el userId del token decodificado
      const userId = req.user.userId;

      // Obtener los datos del usuario basado en el userId
      const userData = await Users.findOne({
        where: { id: userId },
        attributes: ['name', 'email'], // Solo obtenemos el nombre y correo
      });

      if (!userData) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Responder con los datos del usuario
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });
};
