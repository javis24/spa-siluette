import Clients from '../../../models/ClientModel';
import db from '../../../config/database';
import { authenticateToken } from '../middleware/verifyToken';

export default async function handler(req, res) {
  try {
    await db.authenticate();
    await db.sync();

    authenticateToken(req, res, async () => {
      const { id } = req.query;

      if (req.method === 'GET') {
        const client = await Clients.findOne({ where: { uuid: id } });
        if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
        return res.status(200).json(client);
      }

      if (req.method === 'PUT') {
        const { name, address, phone, email, evaluationDate, age, height, unwantedGain, pathologies } = req.body;
        const client = await Clients.findOne({ where: { uuid: id } });
        if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });

        client.name = name || client.name;
        client.address = address || client.address;
        client.phone = phone || client.phone;
        client.email = email || client.email;
        client.evaluationDate = evaluationDate || client.evaluationDate;
        client.age = age || client.age;
        client.height = height || client.height;
        client.unwantedGain = unwantedGain || client.unwantedGain;
        client.pathologies = pathologies || client.pathologies;

        await client.save();
        return res.status(200).json(client);
      }

      if (req.method === 'DELETE') {
        const client = await Clients.findOne({ where: { uuid: id } });
        if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
        await client.destroy();
        return res.status(200).json({ message: 'Cliente eliminado con éxito' });
      }

      return res.status(405).json({ error: 'Método no permitido' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}
