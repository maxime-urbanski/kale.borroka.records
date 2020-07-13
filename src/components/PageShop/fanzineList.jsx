import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import "../menu.css";

import CardArticle from "./CardArticle";

import Footer from "../Footer/Footer";
import fanzine from "./marchandise/Fanzine";

class fanzineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "1",
            cardsPerPage: "9",
        };
    }
    render() {
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
                        {/* <Row>
                            <PaginationDistro
                                cardsPerPage={cardsPerPage}
                                totalCards={fanzineList}
                                paginate={paginate}
                                format={format}
                            />
                        </Row> */}
                    </Col>
                </Container>
                <Footer />
            </>
        );
    }
}
export default fanzineList;
