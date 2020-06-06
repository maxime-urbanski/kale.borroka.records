import React from "react";

import { Container, Row, Col, Pagination } from "reactstrap";

import lp from "./Lp";
import "./menu.css";
import CardArticle from "./CardArticle";
import Footer from "./Footer";
import Paginationtest from "./pagination";
import article from "./Lp";


class LpList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {            
            currentPage: "1",
            cardsPerPage: "9"
        }


    }
    render () {
        const { currentPage, cardsPerPage } = this.state;
        const indexLastCards = currentPage * cardsPerPage;
        const indexFirstCards = indexLastCards - cardsPerPage;
        const currentCards = lp.slice(indexFirstCards, indexLastCards);

        return (
            <div>
                <Container>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">Tous nos LP/10"</h1>
                            <Row className="position">
                                {lp.map((item) => {
                                    return item.quantity > 0 ? (
                                        <CardArticle {...item} currentCards={currentCards}/>
                                    ) : (
                                        ""
                                    );
                                })}
                            </Row>
                        </Row>
                        <Row>
                            <Paginationtest  cardsPerPage={cardsPerPage} totalCard={lp.length}/>
                        </Row>
                    </Col>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default LpList;
