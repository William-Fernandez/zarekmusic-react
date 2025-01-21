require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['https://zarekmusic.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        const msg = {
            to: 'zarekdj@gmail.com',
            from: 'zarekdj@gmail.com',
            subject: `Nuevo mensaje Zarek Website de ${fullName}`,
            text: message,
            html: `<p>Nombre: ${fullName}</p><br><p>Email: ${email}</p><br><p>Mensaje: ${message}</p>`,
        };

        await sgMail.send(msg);

        console.log('Correo electrónico enviado');
        res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ message: 'Error al enviar el mensaje', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});