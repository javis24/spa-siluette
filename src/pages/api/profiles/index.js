// api/index.js
export default function handler(req, res) {
    res.status(200).json({
        message: 'Bienvenido a la API',
        routes: {
            users: '/api/users',
            profiles: '/api/profiles/[id]',
            clients: '/api/clients',
            auth: '/api/auth',
        },
    });
}
