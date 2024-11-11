import Users from '../../../models/UserModel';
import db from '../../../config/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    await db.authenticate();
    await db.sync();

    if (req.method === 'GET') {
      // Obtener todos los usuarios sin incluir la contraseña
      const users = await Users.findAll({
        attributes: { exclude: ['password'] }
      });
      return res.status(200).json(users);
    } 
    
    if (req.method === 'POST') {
      // Crear un nuevo usuario
      const { name, email, password, role } = req.body;
      
      // Encriptar la contraseña antes de almacenar
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await Users.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      return res.status(201).json({
        message: 'Usuario creado con éxito',
        user: { uuid: newUser.uuid, name: newUser.name, email: newUser.email, role: newUser.role }
      });
    }

    return res.status(405).json({ error: 'Método no permitido' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}
