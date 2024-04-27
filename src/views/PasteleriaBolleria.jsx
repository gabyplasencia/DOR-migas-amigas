import React from 'react';
import { useTranslation } from "react-i18next";
import * as fotosPasteleria from '../assets/fotos-pasteleria';

const Pasteleria = () => {
    const { t } = useTranslation();
    return (
        <section id="pasteleria" className="container">
            <h2 className="titulo-seccion">{t("tituloPasteleria")}</h2>
            <div className="wrapper-productos">
                <div className="producto">
                    <img src={fotosPasteleria.palmeritas} alt={t("productoPasteleria1")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria1")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria1")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.brownie} alt={t("productoPasteleria2")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("huevo")}</li>
                        <li>{t("chocolate")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria2")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria2")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.quesillo} alt={t("productoPasteleria3")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("agua")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("vainilla")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria3")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria3")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.gelatina} alt={t("productoPasteleria4")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("vainilla")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria4")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria4")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.galleta} alt={t("productoPasteleria5")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("huevo")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("chocolate")}</li>
                        <li>{t("vainilla")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria5")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria5")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.rosquetes} alt={t("productoPasteleria6")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("huevo")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("semillas")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria6")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria6")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.magdalenas} alt={t("productoPasteleria7")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("huevo")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria7")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria7")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPasteleria.dona} alt={t("productoPasteleria8")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("leche")}</li>
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("huevo")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("aceite de vainilla")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPasteleria8")}</h3>
                        <p className='metodo'>{t("metodoProductoPasteleria8")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pasteleria