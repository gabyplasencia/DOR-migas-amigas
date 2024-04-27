import React from 'react';
import { useTranslation } from "react-i18next";
import * as fotosPan from '../assets/fotos-pan';

const Panaderia = () => {
    const { t } = useTranslation();
    return (
        <section id="panaderia" className="container">
            <h2 className="titulo-seccion">{t("tituloPanaderia")}</h2>
            <div className="wrapper-productos">
                <div className="producto">
                    <img src={fotosPan.panRustico} alt={t("productoPanaderia1")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia1")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia1")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.panSemillas} alt={t("productoPanaderia2")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("semillas")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia2")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia2")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.focaccia} alt={t("productoPanaderia3")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("queso")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia3")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia3")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.panLeche} alt={t("productoPanaderia4")} className="foto-producto"/>
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
                        <h3 className="nombre-producto">{t("productoPanaderia4")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia4")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.baguette} alt={t("productoPanaderia5")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia5")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia5")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.panMolde} alt={t("productoPanaderia6")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia6")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia6")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.croissant} alt={t("productoPanaderia7")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("mantequilla")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia7")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia7")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.mantou} alt={t("productoPanaderia8")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia8")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia8")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.panPita} alt={t("productoPanaderia9")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("levadura")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia9")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia9")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosPan.grissini} alt={t("productoPanaderia10")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaTrigo")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("levadura")}</li>
                        <li>{t("semillas")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoPanaderia10")}</h3>
                        <p className='metodo'>{t("metodoProductoPanaderia10")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Panaderia