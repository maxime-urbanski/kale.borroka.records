import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./menu.css";
import CardArticle from "./CardArticle";
import Footer from "./Footer";

import article from "./Lp";
import PaginationDistro from "./pagination";
import { Link } from "react-router-dom";

class LpList extends React.Component {
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
        const currentCards = article.slice(indexFirstCards, indexLastCards);

        const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        const pageNext = () => this.setState({ currentCards: currentPage + 1 });
        const pagePrev = () => this.setState({ currentCards: currentPage - 1 });
        const format = "LP";

        return (
            <div>
                <Container>
                    <Breadcrumb listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem active tag="span">
                            LP & 10"
                        </BreadcrumbItem>
                    </Breadcrumb>
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
                            <PaginationDistro
                                cardsPerPage={cardsPerPage}
                                totalCards={article}
                                paginate={paginate}
                                pageNext={pageNext}
                                pagePrev={pagePrev}
                                currentPage={currentPage}
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

export default LpList;
