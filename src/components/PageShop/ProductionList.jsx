import React from "react";
import {
    Container,
    Breadcrumb,
    BreadcrumbItem,
    Col,
    Row,
    Table,
} from "reactstrap";
//import PaginationDistro from "./pagination";
import production from "../PageShop/marchandise/production";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../menu.css";

class ProductionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "1",
            albumPerPage: "10",
        };
    }
    render() {
        const { currentPage, albumPerPage } = this.state;
        const indexLastCards = currentPage * albumPerPage;
        const indexFirstCards = indexLastCards - albumPerPage;
        const currentAlbum = production.slice(indexFirstCards, indexLastCards);

        // const paginate = (pageNum) => this.setState({ currentPage: pageNum });
        // const pageNext = () =>
        //     this.setState({ currentCards: "currentPage + 1" });
        // const pagePrev = () =>
        //     this.setState({ currentCards: "currentPage - 1" });
        // const format = "LP";
        return (
            <div>
                <Container>
                    <Breadcrumb listTag="div" className="breadcrumb">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            KALE BORROKA RECORDS
                        </BreadcrumbItem>
                        <BreadcrumbItem active tag="span">
                            PRODUCTION
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col>
                        <Row className="position">
                            <h1 className="mt-3 position">
                                KALE BORROKA RECORDS
                            </h1>
                            <Row className="position">
                                <Table className="table table-striped table-dark mt-5 mb-5">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Titre</th>
                                            <th>Format</th>
                                            <th>Label</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentAlbum.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th>{item.numberProd} </th>

                                                    <td>
                                                        <Link
                                                            to={`/${item.format}/${item.id}`}
                                                        >
                                                            {item.artiste} -{" "}
                                                            {item.name}{" "}
                                                        </Link>
                                                    </td>
                                                    <td>{item.format}</td>
                                                    <td>{item.labels} </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Row>
                        </Row>
                        {/* <Row>
                            <PaginationDistro
                                cardsPerPage={albumPerPage}
                                totalCards={production}
                                paginate={paginate}
                                pageNext={pageNext}
                                pagePrev={pagePrev}
                                currentPage={currentPage}
                                format={format}
                            />
                        </Row> */}
                    </Col>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default ProductionList;
