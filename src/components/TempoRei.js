import React from "react";
import TempoReiImage from "../assets/bottles/tempo.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/fria_bg.jpg";
import { Trans } from "@lingui/macro";

const TempoRei = () => (
    <>
        <Header
            heading="TEMPO REI"
            image={Background}
            subHeading="TRANSFORMAI AS VELHAS FORMAS DO VIVER"
            winePage
        />
        <div className="wine-page container">
            <div className="wine-page__area">
                <img
                    className="wine-page__bottle md:-mt-80"
                    src={TempoReiImage}
                    alt="prama-dorada-bottle"
                />
                <div className="wine-page__content">
                    <h2 className="font-bold text-2xl md:text-3xl mt-4">
                        TEMPO REI
                        <br /> ISOLA DEI NURAGHI ROSSO IGT
                    </h2>
                    <p className="mt-4">
                        <Trans>Il tempo trova sempre la via.</Trans>
                    </p>
                    <p className="mt-4">
                        <Trans>
                            Un vino che ormai era senza pretese, lasciato al tempo per
                            evolversi, si trasforma e porta con se tutti gli anni del legno,
                            del sole e della flor. Ammorbidito è diventato un scrigno di
                            profumi e sensazioni e il tempo è stato sovranno di questa
                            trasformazione.
                        </Trans>
                    </p>
                    <div className="wine-page__columns">
                        <div>
                            <p>
                                <Trans>
                                    Vitigni:{" "}
                                    <span className="text-gray-400">
                                        Cannonau e Cabernet Sauvignon.
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Zona di produzione:{" "}
                                    <span className="text-gray-400">
                                        {" "}
                                        Scupaggiu (Bortigiadas)
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Tipologia di terreno:{" "}
                                    <span className="text-gray-400">Calcareo argilloso.</span>{" "}
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Tipologia di allevamento:
                                    <span className="text-gray-400">
                                        {" "}
                                        Alberello e cordone speronato.
                                    </span>{" "}
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Densità di impianto:{" "}
                                    <span className="text-gray-400">
                                        5.680 piante per ettaro.
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Resa per ettaro:{" "}
                                    <span className="text-gray-400">55 quintali.</span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Trattamenti:{" "}
                                    <span className="text-gray-400">
                                        Rame, zolfo e preparati biologici.
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Vinificazione:{" "}
                                    <span className="text-gray-400">
                                        Fermentazione spontanea in tini aperti e poi un passaggio di
                                        4 anni in legno grande. Ancora il vino risultava ostico e
                                        scomposto. Affinamento in damigiane esposte all' aria e alle
                                        intemperie per un anno in stile Roussillon. Ultimo passaggio
                                        in vasche di cemento scolme con formazione della Flor e
                                        processo ossidativo, fino alla bottiglia senza chiarifiche
                                        né filtrazioni.
                                    </span>
                                </Trans>
                            </p>
                        </div>
                        <div>
                            <p>
                                <Trans>
                                    Colore:{" "}
                                    <span className="text-gray-400">
                                        Rosso ciliegia scarico e leggermente velato. Introduzione ad
                                        un vino fuori dalle righe a partire dalla vista. Un aspetto
                                        molto casual che viene immediatamente smentito appena il
                                        naso si avvicina al calice. È il vino delle grandi
                                        contraddizioni: se l'aspetto visivo è vestito in jeans e
                                        camperos, il naso ci parla di abito da sera da grandi
                                        occasioni.
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Olfatto:{" "}
                                    <span className="text-gray-400">
                                        Un’incalzante raffica di suggestioni che vanno dalla frutta
                                        secca alle note balsamiche di eucalipto. Il tutto su una
                                        base di liquirizia e profumato tabacco.{" "}
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Gusto:{" "}
                                    <span className="text-gray-400">
                                        In bocca si chiude il cerchio delle sorprese: se da un vino
                                        dal bouquet così articolato e complesso, ti aspetti un vino
                                        giunonico e ciccione, rimani spiazzato dalla grande
                                        scorrevolezza regalata dai tannini residui ma ancora
                                        operativi e da una sapida freschezza.
                                    </span>
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Abbinamenti:{" "}
                                    <span className="text-gray-400">
                                        Un vino importante ma non difficile da bere e da consigliare
                                        con pecorini stagionati, dolci-non-dolci, cioccolato
                                        fondente di buona concentrazione, sigari cubani.
                                    </span>
                                </Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default TempoRei;
