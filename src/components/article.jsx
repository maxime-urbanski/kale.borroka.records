import React from "react";
import { Row, Col } from "reactstrap";

import news from "./img/art1.jpg";

function Article() {
    return (
        <Row>
            <Col>
                <h1 className="mt-5">Nouvelles Arrivages !</h1>
                <Row>
                    <p>
                        {" "}
                        Ca vient tout juste d'arriver. On a la dernière pépite
                        de Knock Out, version pochette blanche/ noire avec
                        disque Or limité à 218 exemplaire chaques. Mais aussi la
                        version sérigraphié à la main par le groupe, limité à
                        100 emplaire avec son pin's ! <br /> Retour dans le
                        stock de la compile VA - Oi! in Head, Punk in Heart. Un
                        bien grand merci à CROM RECORDS pour la collaboration !
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
