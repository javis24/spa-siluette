// src/pages/api/profiles/[id].js
import Profiles from '../../../models/UserProfileModel';
import Users from '../../../models/UserModel';
import { authenticateToken } from '../middleware/verifyToken';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    authenticateToken(req, res, async () => {
      try {
        const userId = req.user.userId; // Obtén el ID del usuario desde el token
        const userProfile = await Profiles.findOne({
          where: { userId },
          include: [{ model: Users, attributes: ['name', 'email'] }]
        });

        if (!userProfile) {
          return res.status(404).json({ message: 'Perfil no encontrado' });
        }

        res.status(200).json(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Error en el servidor' });
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${method} no permitido`);
  }
}
