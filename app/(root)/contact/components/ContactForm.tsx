"use client";

import { cn } from "@/libs/utils";
import { useState, ChangeEvent, FormEvent } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState({ from_name: "", from_email: "", message: ""});
    const [formData, setFormData] = useState({ from_name: "", from_email: "", subject: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { from_name: "", from_email: "", message: "" };

    if (!formData.from_name) {
      errors.from_name = "El nombre es obligatorio.";
      isValid = false;
    }

    if (!formData.from_email) {
      errors.from_email = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = "El correo electrónico no es válido.";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
    const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '';

    emailjs
      .send(serviceID, templateID, formData, emailjsKey)
      .then(
        () => {
          toast.success("¡Correo enviado exitosamente!");
          setFormData({ from_name: "", from_email: "", subject: "", message: "" });
        },
        (err) => {
          setError(
            "No se pudo enviar el correo. Inténtalo de nuevo más tarde."
          );
          toast.error(err);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      id="form_email"
      className="flex flex-col gap-5 mt-7"
      onSubmit={handleSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Nombre"
            value={formData.from_name}
            onChange={handleChange}
            className={cn(
              "text-dark w-full py-4 px-5 bg-gray-100 border placeholder:text-gray-700/80 outline-none text-sm",
              formErrors.from_name && "border-red-300"
            )}
          />
          {formErrors.from_name && (
            <span className="error-message text-red-500 text-sm">
              {formErrors.from_name}
            </span>
          )}
        </div>
        <div>
          <input
            type="email"
            name="from_email"
            id="from_email"
            placeholder="Correo Electrónico"
            value={formData.from_email}
            onChange={handleChange}
            className={cn(
              "text-dark w-full py-4 px-5 bg-gray-100 border placeholder:text-gray-700/80 outline-none text-sm",
              formErrors.from_email && "border-red-300"
            )}
          />
          {formErrors.from_email && (
            <span className="error-message text-red-500 text-sm">
              {formErrors.from_email}
            </span>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            "text-dark w-full py-4 px-5 bg-gray-100 border placeholder:text-gray-700/80 outline-none text-sm"
          )}
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "text-dark w-full py-3 px-5 bg-gray-100 border placeholder:text-gray-700/80 outline-none text-sm min-h-28 resize-none",
            formErrors.message && "border-red-300"
          )}
        ></textarea>
        {formErrors.message && (
          <span className="error-message text-red-500 text-sm">
            {formErrors.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        id="button_send"
        className="p-4 border border-primary text-primary w-full rounded-lg bg-primary/10 transition-colors duration-300 font-medium"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;
