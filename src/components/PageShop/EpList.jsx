import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "../Styles/pageShop.module.css";

import epArticle from "./marchandise/EP";
import CardArticle from "./CardArticle";
import PaginationDistro from "../Function/pagination";
import Footer from "../Footer/Footer";

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
        // const pageNext = () => this.setState({ currentCards: currentPage + 1 });
        // const pagePrev = () => this.setState({ currentCards: currentPage - 1 });
        const format = "EP";

        return (
            <div>
                <Container>
                    <Breadcrumb className={styles.breadCrumb} listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem active tag="span">
                            EP
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col>
                        <Row>
                            <h1 className={styles.title}>Tous nos EP</h1>
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
