import Clients from '../../../models/ClientModel';
import db from '../../../config/database';

export default async function handler(req, res) {
    try {
        await db.authenticate();
        await db.sync();

        if (req.method === 'GET') {
            const clients = await Clients.findAll();
            return res.status(200).json(clients);
        } 

        if (req.method === 'POST') {
            const { name, address, phone, email, evaluationDate, age, height, unwantedGain, pathologies } = req.body;
            const newClient = await Clients.create({ name, address, phone, email, evaluationDate, age, height, unwantedGain, pathologies });
            return res.status(201).json(newClient);
        }

        return res.status(405).json({ error: 'Método no permitido' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
}
