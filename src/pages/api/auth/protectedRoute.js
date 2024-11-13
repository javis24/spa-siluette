// pages/api/protectedRoute.js
import { verifyToken } from '../middleware/verifyToken';

const handler = async (req, res) => {
  res.status(200).json({ message: 'Acceso permitido', user: req.user });
};

export default verifyToken(handler);
