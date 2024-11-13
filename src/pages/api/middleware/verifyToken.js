// verifyToken.js
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // El token debe venir en formato "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido' });
  }
};
