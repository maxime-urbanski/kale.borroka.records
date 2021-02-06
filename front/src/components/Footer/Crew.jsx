import React from "react";
import { Container } from "reactstrap";
import "./crew.css";

function Crew() {
  return (
    <>
      <Container>
        <div>
          <h1>Qu'est ce que "Kale Borroka" ?</h1>
          Kale Borroka Records est une distribution/ label de musique
          international, à but non lucratif, situé à Baiona, Euskal Herria.
          <br />
          La distro a pour but ultime la propagation de la culture punk,
          skinheads, hardcore et tout autres subculture. Vous ne trouverez pas
          de disques, de fanzine où les groupes/auteurs puent l'apolitisme.{" "}
          <br />
          Le regard antifasciste des protagonistes est primordiale pour avoir sa
          place au sein de la distro.
          <br />
          Tout bénefice sera utilisé pour faire vivre la scéne locale lors de
          differents événements (concert, DJsert) , à la production de disque
          mais aussi en participant aux caisses de soutiens des luttes du
          moment.
        </div>
        <div className="Parrallax"></div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            incidunt. Incidunt officia atque quidem eaque obcaecati aperiam
            corrupti dolorem quia, blanditiis reprehenderit porro doloremque
            vitae deserunt. Magni enim laudantium laboriosam!
          </p>
        </div>
      </Container>
    </>
  );
}

export default Crew;
