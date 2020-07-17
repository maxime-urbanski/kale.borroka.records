import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "./pageShop.module.css";

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
        const { currentPage, cardsPerPage } = this.state;
        const indexLastCards = currentPage * cardsPerPage;
        const indexFirstCards = indexLastCards - cardsPerPage;
        const currentCards = fanzine.slice(indexFirstCards, indexLastCards);

        // const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        // const format = "fanzine";

        return (
            <>
                <Container>
                    <Breadcrumb className={styles.breadCrumb} listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem tag={Link} to={"/divers"}>
                            DIVERS
                        </BreadcrumbItem>
                        <BreadcrumbItem active tag="span">
                            FANZINE
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col>
                        <Row>
                            <h1 className={`${styles.position} mx-auto`}>
                                Tous nos Fanzines
                            </h1>
                        </Row>
                        <Row>
                            {currentCards.map((item) => {
                                return item.quantity > 0 ? (
                                    <div className={styles.position}>
                                        <CardArticle {...item} key={item.id} />
                                    </div>
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
