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
                        On a la dernière pépite
                        de Knock Out, avec une reprise de Rien qu'en trainant de Camera Silens !
                        Les trois version sont dispo au shop: 
                        <br /> - Version disque Or et pochette{" "}
                        <Link to="/EP/15432976"> blanche </Link>( limitée à 218
                        exemplaires).
                        <br />- Version disque Or et pochette{" "}
                        <Link to="/EP/15018551">noire</Link> ( limitée à 218
                        exemplaires). <br />
                        Version disque noir avec la pochette faite à la{" "}
                        <Link to="/EP/15431270">
                            mains par les membres du groupe{" "}
                        </Link>
                        ( limitée à 100 exemplaires, vendue avec son pin's).
                        <br />
                        Retour dans le stock de la compile{" "}
                        <Link to="/LP/10364210">
                            VA - Oi! in Head, Punk in Heart.{" "}
                        </Link>{" "}
                        <br />
                        Un bien grand merci à CROM RECORDS pour la collaboration
                        !
                    </p>
                    <img
                        src={news}
                        alt="news arrivals"
                        center                        
                        className="mx-auto mt-5 mb-5"
                    />
                </Row>
            </Col>
        </Row>
    );
}

export default Article;
