import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit se ha ejecutado");
        setIsSubmitting(true);

        try {
            console.log(
                "Intentando enviar la petición a:",
                "http://localhost:5000/api/send-email"
            );
            console.log("Datos a enviar:", formData);

            const response = await fetch(
                "http://localhost:5000/api/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData?.message || `Error: ${response.status}`
                );
            }

            setFormData({ fullName: "", email: "", message: "" });
            setSubmissionMessage({
                type: "success",
                text: "Mensaje enviado correctamente",
            });
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setSubmissionMessage({
                type: "error",
                text: error.message || "Error al enviar el mensaje",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl w-full bg-gray-600/80 pb-6 px-4 rounded-md text-white"
                >
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="mt-5 flex flex-col w-full drop-shadow-lg">
                            <label
                                htmlFor="fullName"
                                className="w-72 font-semibold text-lg"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-[17rem] h-11 border rounded-md p-2 mt-2 outline-none"
                            />
                        </div>
                        <div className="mt-5 flex flex-col w-full drop-shadow-lg">
                            <label
                                htmlFor="email"
                                className="w-[17rem] font-semibold text-lg"
                            >
                                E-mail Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-[17rem] h-11 border rounded-md p-2 mt-2 outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-5 drop-shadow-lg">
                        <label htmlFor="message" className="w-72 font-semibold text-lg">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md p-2 mt-2 h-20 resize-none outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="drop-shadow-lg w-full h-10 bg-[#4498B4] border-none rounded-lg text-white font-semibold mt-5 hover:bg-[#1A4F82] transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
