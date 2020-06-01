import React from 'react';
import Axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

import lplist from './Lp.json';

import bfm from './img/bfm.jpg';
import brixtoncats from './img/brixtoncats.jpg';
import grabuge from './img/grabuge.jpg';
import keltoi from './img/keltoi.jpg';
import kronstadt from './img/kronstadt.jpg';
import mdb from './img/mdb.jpg';
import sharpcut from './img/sharpcut.jpg';
import traitre from './img/traitre.jpg';
import urbanvietcong from './img/urbanvietcong.jpg';
import va from './img/va.jpg';
import { Link } from 'react-router-dom';



function LpList () {
    return (
        <Container>
        <Col>
            <Row>
                <h1 className="mt-3
                
                ">Tous nos LP/10"</h1>
            </Row>
            <Row>
                {lplist.map((item) => {
                   return (     
                    <Card className="m-5" key={item.id}>
                        <CardImg top width="100%" src={item.image} alt={item.name} />
                        <CardBody>
                        <CardTitle tag={Link} to={`/lp/${item.id}`}>{item.artiste}</CardTitle><br/>
                        <CardTitle tag={Link} to={`/lp/${item.id}`}>{item.name}</CardTitle>
                        <CardSubtitle>{item.format}</CardSubtitle>
                        <CardText>Prix: {item.price}</CardText>                    
                        </CardBody>
                </Card>
                )})}
            </Row>        
        </Col>
        </Container>
        


    )
}

export default LpList;


