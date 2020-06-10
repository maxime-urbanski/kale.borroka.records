import React from "react";
import { Row, Col } from "reactstrap";

import news from "./img/art1.jpg";
import { Link } from "react-router-dom";

function Article() {
    return (
        <Row>
            <Col>
                <h1 className="mt-5">Nouveaux Arrivages !</h1>
                <Row>
                    <p className="text-justify-center">
                        {" "}
                        Ca vient tout juste d'arriver. On a la dernière pépite
                        de Knock Out, avec une reprise de Camera Silens ("Rien
                        qu'en trainant => Deambular") Differente version
                        disponible:
                        <br /> - Version disque Or et pochette blanche ( limitée
                        à 218 exemplaires): <br />{" "}
                        <Link to="/EP/15432976">Plus d'info ici</Link>
                        <br />- Version disque Or et pochette noire ( limitée à
                        218 exemplaires): <br />
                        <Link to="/EP/15018551">Plus d'info ici</Link> <br />-
                        Version disque noir avec la pochette faite à la mains
                        par les membres du groupe ( limitée à 100 exemplaires,
                        vendue avec son pin's):
                        <br />
                        <Link to="/EP/15431270">Plus d'info ici</Link> <br />
                        Retour dans le stock de la compile VA - Oi! in Head,
                        Punk in Heart : <br />
                        <Link to="/LP/10364210">Plus d'info ici</Link> <br />
                        Un bien grand merci à CROM RECORDS pour la collaboration
                        !
                    </p>
                    <img
                        src={news}
                        alt="news arrivals"
                        width="50%"
                        className="mx-auto mt-5 mb-5"
                    />
                </Row>
            </Col>
        </Row>
    );
}

export default Article;
