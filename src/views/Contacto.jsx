import React from 'react';
import { useTranslation } from "react-i18next";

const Contacto = () => {
    const { t } = useTranslation();

    const send= () => {
        alert('Mensaje enviado correctamente');
    }

    return (
        <section id="contacto" className="container">
            <h2 className="section__title">{t("contactanos")}</h2>
            <form className="contact__form" method="/" onSubmit={send}>
                <label htmlFor="name">{t("nombre")}</label>
                <input type="text" id="name" name="name" placeholder="María"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com"/>

                <label htmlFor="asunto">{t("asunto")}</label>
                <input type="text" id="asunto" name="asunto" placeholder={t("placeholderAsunto")}/>

                <label htmlFor="message">{t("mensaje")}</label>
                <textarea id="message" name="message" placeholder={t("placeholderMensaje")}></textarea>

                <button type="submit" className="contact__btn">{t("enviar")}</button>
            </form>
        </section>
    )
}

export default Contacto