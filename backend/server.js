const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

// Configuración de middlewares
app.use(cors());
app.use(bodyParser.json());

// Configura SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Ruta para enviar correos
app.post("/api/send-email", async (req, res) => {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const msg = {
        to: "zarekdj@gmail.com",
        from: "zarekdj@gmail.com",
        subject: `New contact ${fullName} from Zarek Website`,
        text: `Has recibido un mensaje de ${fullName} (${email}):\n\n${message}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el mensaje" });
    }
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
