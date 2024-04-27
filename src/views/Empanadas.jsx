import React from 'react';
import { useTranslation } from "react-i18next";
import * as fotosEmpanada from '../assets/fotos-empanada';

const Empanadas = () => {
    const { t } = useTranslation();
    return (
        <section id="empanadas" className="container">
           <h2 className="titulo-seccion">{t("tituloEmpanadas")}</h2>
            <div className="wrapper-productos">
                <div className="producto">
                    <img src={fotosEmpanada.empanadaQueso} alt={t("productoEmpanadas1")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaMaiz")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("queso")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoEmpanadas1")}</h3>
                        <p className='metodo'>{t("metodoProductoEmpanadas1")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosEmpanada.empanadaJamon} alt={t("productoEmpanadas2")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaMaiz")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("jamon")}</li>
                        <li>{t("queso")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoEmpanadas2")}</h3>
                        <p className='metodo'>{t("metodoProductoEmpanadas2")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosEmpanada.empanadaPollo} alt={t("productoEmpanadas3")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaMaiz")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("pollo")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoEmpanadas3")}</h3>
                        <p className='metodo'>{t("metodoProductoEmpanadas3")}</p>
                    </div>
                </div>

                <div className="producto">
                    <img src={fotosEmpanada.empanadaPollo} alt={t("productoEmpanadas4")} className="foto-producto"/>
                    <ul className="lista-ingredientes">
                        <li>{t("agua")}</li>
                        <li>{t("harinaMaiz")}</li>
                        <li>{t("sal")}</li>
                        <li>{t("azucar")}</li>
                        <li>{t("carne")}</li>
                    </ul>
                    <div className="wrapper-p">
                        <h3 className="nombre-producto">{t("productoEmpanadas4")}</h3>
                        <p className='metodo'>{t("metodoProductoEmpanadas4")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Empanadas