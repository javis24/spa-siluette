import Users from '../../../models/UserModel';
import db from '../../../config/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    await db.authenticate();
    await db.sync();

    const { id } = req.query;

    if (req.method === 'GET') {
      // Obtener un usuario específico sin la contraseña
      const user = await Users.findOne({
        where: { uuid: id },
        attributes: { exclude: ['password'] }
      });

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      return res.status(200).json(user);
    } 
    
    if (req.method === 'PUT') {
      // Actualizar un usuario específico
      const { name, email, password, role } = req.body;

      const user = await Users.findOne({ where: { uuid: id } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Solo actualizar los campos proporcionados
      if (name) user.name = name;
      if (email) user.email = email;
      if (role) user.role = role;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }

      await user.save();
      return res.status(200).json({
        message: 'Usuario actualizado con éxito',
        user: { uuid: user.uuid, name: user.name, email: user.email, role: user.role }
      });
    } 
    
    if (req.method === 'DELETE') {
      // Eliminar un usuario específico
      const user = await Users.findOne({ where: { uuid: id } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      await user.destroy();
      return res.status(200).json({ message: 'Usuario eliminado con éxito' });
    }

    return res.status(405).json({ error: 'Método no permitido' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}
