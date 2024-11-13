// middleware/verifyToken.js
import jwt from 'jsonwebtoken';

export const verifyToken = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // El token viene en el formato "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido' });
  }
};
