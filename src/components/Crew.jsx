import React from "react";
import { Container, Media } from "reactstrap";
import "./crew.css";
import Footer from "./Footer";
import icon from "./img/icon.jpg";
function Crew() {
    return (
        <>
            <Container>
                <Media>
                    <Media left middle href="#">
                        <Media
                            object
                            src={icon}
                            alt="Generic placeholder image"
                            width="190px"
                        />
                    </Media>
                    <Media body>
                        <Media heading>Kale Borroka Records</Media>
                        Kale Borroka Records est une distribution/ label de
                        musique international, à but non lucratif, situé à
                        Baiona, Euskal Herria.
                        <br />
                        La distro a pour but ultime la propagation de la culture
                        punk, skinheads, hardcore et tout autres subculture.
                        Vous ne trouverez pas de disques, de fanzine où les
                        groupes/auteurs puent l'apolitisme. <br />
                        Le regard antifasciste des protagonistes est primordiale
                        pour avoir sa place au sein de la distro.
                        <br />
                        Tout bénefice sera utilisé pour faire vivre la scéne
                        locale lors de differents événements (concert, DJsert) ,
                        à la production de disque mais aussi en participant aux
                        caisses de soutiens des luttes du moment.
                    </Media>
                </Media>
            </Container>
            <Footer />
        </>
    );
}

export default Crew;
