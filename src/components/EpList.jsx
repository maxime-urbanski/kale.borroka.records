import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./menu.css";
import epArticle from "./EP";
import CardArticle from "./CardArticle";
import Footer from "./Footer";
import PaginationDistro from "./pagination";
import { Link } from "react-router-dom";

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
        const format = "EP";

        return (
            <div>
                <Container>
                    <Breadcrumb listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem tactive tag="span">
                            EP & CD
                        </BreadcrumbItem>
                    </Breadcrumb>
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
