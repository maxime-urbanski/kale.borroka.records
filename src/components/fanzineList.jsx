import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./menu.css";

import CardArticle from "./CardArticle";
import PaginationDistro from "./pagination";
import Footer from "./Footer";
import fanzine from "./Fanzine";

class fanzineList extends React.Component {
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
        const currentCards = fanzine.slice(indexFirstCards, indexLastCards);

        const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        const format = "fanzine";

        return (
            <>
                <Container>
                    <Breadcrumb listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem tag={Link} to={"/divers"}>
                            DIVERS
                        </BreadcrumbItem>
                        <BreadcrumbItem tactive tag="span">
                            FANZINE
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">Tous nos Fanzines</h1>
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
                                totalCards={fanzineList}
                                paginate={paginate}
                                format={format}
                            />
                        </Row>
                    </Col>
                </Container>
                <Footer />
            </>
        );
    }
}
export default fanzineList;
