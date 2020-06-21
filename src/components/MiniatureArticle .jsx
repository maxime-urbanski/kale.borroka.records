import React from 'react';
import { Container, Jumbotron} from 'reactstrap';
import tof from './img/art1.jpg'
import { Link } from 'react-router-dom';


function MiniArticle () {
    return (
        <Container>
            <Jumbotron className="mt-5 mb-5 border border-secondary bg-white">
                <div className="media">                
                    <img src={tof} alt="test" width="200px"/>
                        <div className="media-body mx-auto">
                            <h2>Nouveaux Arrivages</h2>
                            <p className="text-justify-center">
                            {" "}
                            On a la dernière pépite
                            de Knock Out. Les trois version sont dispo au shop: 
                            <br />
                            -Version faite à la{" "}
                            <Link to="/EP/15431270">
                                mains par les membres du groupe{" "}
                            </Link>
                            ( limitée à 100 exemplaires, vendue avec son pin's).
                            <br /> - Version disque Or et pochette{" "}
                            <Link to="/EP/15432976"> blanche </Link>( limitée à 218
                            exemplaires).
                            <br />- Version disque Or et pochette{" "}
                            <Link to="/EP/15018551">noire</Link> ( limitée à 218
                            exemplaires). <br />
                            Retour dans le stock de la compile{" "}
                            <Link to="/LP/10364210">
                                VA - Oi! in Head, Punk in Heart.{" "}
                            </Link>{" "}
                            <br />
                            Un bien grand merci à CROM RECORDS pour la collaboration
                            !
                        </p>
                        </div>
                </div>
                </Jumbotron>
        </Container>
    )
}

export default MiniArticle;