import React from "react";

import { Container, Row, Col } from "reactstrap";

import "./menu.css";
import epArticle from "./EP";
import CardArticle from "./CardArticle";
import Footer from "./Footer";
import PaginationDistro from "./pagination";

class EpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "1",
            cardsPerPage: "9",
        };
    }
    render() {
        const { currentPage, cardsPerPage } = this.state;
        const indexLastCards = currentPage * cardsPerPage;
        const indexFirstCards = indexLastCards - cardsPerPage;
        const currentCards = epArticle.slice(indexFirstCards, indexLastCards);

        const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        const pageNext = () => this.setState({ currentCards: currentPage + 1 });
        const pagePrev = () => this.setState({ currentCards: currentPage - 1 });
        const format = "EP";

        return (
            <div>
                <Container>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">Tous nos EP/CD</h1>
                        </Row>
                        <Row className="position">
                            {currentCards.map((item) => {
                                return item.quantity > 0 ? (
                                    <CardArticle {...item} key={item.id} />
                                ) : (
                                    ""
                                );
                            })}
                        </Row>
                        <Row>
                            <PaginationDistro
                                cardsPerPage={cardsPerPage}
                                totalCards={epArticle}
                                paginate={paginate}
                                format={format}
                            />
                        </Row>
                    </Col>
                </Container>
                <Footer />
            </div>
        );
    }
}
export default EpList;
