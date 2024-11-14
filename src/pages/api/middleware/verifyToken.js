// middleware/verifyToken.js
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    console.log("Token no proporcionado en el encabezado");
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    console.log("Token no proporcionado en el formato adecuado");
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decodificado:", decoded); // Muestra el contenido del token
    req.user = decoded; // Almacena el token decodificado directamente en `req.user`
    next(); // Llama a la siguiente función en la cadena
  } catch (error) {
    console.log("Token inválido:", error.message);
    return res.status(401).json({ message: 'Token no válido' });
  }
};
