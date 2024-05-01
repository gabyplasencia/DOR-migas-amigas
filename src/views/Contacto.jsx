import React from 'react';
import { useTranslation } from "react-i18next";

const Contacto = () => {
    const { t } = useTranslation();

    const send= () => {
        alert('Mensaje enviado correctamente');
    }

    return (
        <section id="contacto">
            <div className="contacto-wrapper">
                <h2 className="contacto-titulo">{t("contactanos")}</h2>
                <form className="contact__form" method="/" onSubmit={send}>

                    <div className="wrapper-input">
                    <label htmlFor="name">{t("nombre")}:</label>
                    <input type="text" id="name" name="name" placeholder="María Pérez" required/>
                    </div>

                    <div className="wrapper-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" required/>
                    </div>

                    <div className="wrapper-input">
                    <label htmlFor="asunto">{t("asunto")}:</label>
                    <input type="text" id="asunto" name="asunto" placeholder={t("placeholderAsunto")} required/>
                    </div>

                    <div className="wrapper-input">
                    <label htmlFor="message">{t("mensaje")}:</label>
                    <textarea id="message" name="message" placeholder={t("placeholderMensaje")} required></textarea>
                    </div>

                    <button type="submit" className="contact__btn">{t("enviar")}</button>
                </form>
            </div>
        </section>
    )
}

export default Contacto