import React from 'react';
import map from "../../assets/map.webp"
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer id="footer" role="complementary">
            <div className="wrapper-f">
                <div className="wrapper-contactanos">
                    <strong>{t("contactanos")}</strong>
                    <p>{t("telefono")}: 555-55-55-55</p>
                    <p>Email: migasamigas@correo.es</p>
                    <p>{t("direccion")} </p>
                </div>
                <img src={map} alt="mapa" className='mapa-f'/>
            </div>
            <strong>Migas Amigas</strong>
        </footer>
    )
}

export default Footer