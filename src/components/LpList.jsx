import React from "react";

import { Container, Row, Col, Pagination } from "reactstrap";

import "./menu.css";
import CardArticle from "./CardArticle";
import Footer from "./Footer";
import Paginationtest from "./pagination";
import article from "./Lp";
import disque from './disque'



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
        const currentCards = article.slice(indexFirstCards, indexLastCards);

        return (
            <div>
                <Container>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">Tous nos LP/10"</h1>
                            <Row className="position">
                                {currentCards.map((item) => {
                                    return item.quantity > 0 ? (
                                        <CardArticle {...item} />
                                    ) : (
                                        ""
                                    );
                                })}
                            </Row>
                        </Row>
                        <Row>
                            <Paginationtest  cardsPerPage={cardsPerPage} totalCards={article}/>
                        </Row>
                    </Col>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default LpList;
