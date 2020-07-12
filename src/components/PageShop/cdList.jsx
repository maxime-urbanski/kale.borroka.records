import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import "../menu.css";

import CardArticle from "./CardArticle";
import PaginationDistro from "../Function/pagination";
import Footer from "../Footer/Footer";
import cd from "./marchandise/CD";

class cdList extends React.Component {
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
        const currentCards = cd.slice(indexFirstCards, indexLastCards);

        const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        const format = "CD";

        return (
            <div>
                <Container>
                    <Breadcrumb listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem tactive tag="span">
                            CD
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">Tous nos CD</h1>
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
                                totalCards={cd}
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

export default cdList;
