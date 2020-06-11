import React from 'react';
import { Container, Row, Jumbotron, Col } from 'reactstrap';
import tof from './img/art1.jpg'


function MiniArticle () {
    return (
        <Container>
            <Jumbotron>
                <div className="media">                
                    <img src={tof} alt="test" width="100px"/>
                        <div className="media-body">
                            <h2>Nouveaux Arrivage</h2>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolore possimus officia repellat accusamus ipsum aliquam repudiandae iusto qui iure dolores quas adipisci nemo autem culpa, odit, voluptate perspiciatis illum recusandae?</p>
                        </div>
                </div>
                </Jumbotron>
        </Container>
    )
}

export default MiniArticle;