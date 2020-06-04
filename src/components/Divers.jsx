import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import fanzine from "./img/fanzine_4.png";
import ipeh from "./img/ipeh.jpg";
import { Link } from 'react-router-dom';

function divers () {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={fanzine} alt="fanzine" width="300px" className="m-5" tag={Link} to={"/Divers/fanzine"} />
                    <img src={ipeh} alt="ipeh antifaxista" width="300px" className="m-5" tag={Link} to={"/Divers/IPEH"} />
                
                </Col>
            </Row>
        </Container>
    );
}

export default divers;