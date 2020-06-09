import React from "react";
import Axios from "axios";
import {
    Container,
    Col,
    Row,
    Table,
    BreadcrumbItem,
    Breadcrumb,
} from "reactstrap";

import allArticles from "./disque";
import Footer from "./Footer";
import ModalBuy from "./ModalBuy";
import { Link } from "react-router-dom";

class VinyleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lp: [],
            isLoading: true,
        };

        this.getInfo = this.getInfo.bind(this);
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo() {
        const id = this.props.match.params.id;
        const url = `https://api.discogs.com/releases/${id}`;
        Axios.get(url)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                this.setState({
                    lp: data,
                });
            });
    }

    render() {
        const id = this.props.match.params.id;

        const {
            artists_sort,
            title,
            styles,
            tracklist,
            year,
            notes,
            labels,
        } = this.state.lp;
        return (
            <div>
                <Container>
                    <Breadcrumb listTag="div">
                        <BreadcrumbItem tag={Link} to={"/"}>
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem
                            tag={Link}
                            to={`/${allArticles[id]?.format}`}
                        >
                            {allArticles[id]?.format}
                        </BreadcrumbItem>
                        <BreadcrumbItem tactive tag="span">
                            {`${artists_sort} - ${title}`}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col className="cole-md-6 ">
                            <h1 className="mt-3 justify-content-center text-monospace font-weight-bold font-weight-bold">
                                {artists_sort} - {title}
                            </h1>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="col-md-6">
                            <Row>
                                <h3>{styles}</h3>
                            </Row>
                            <Row>
                                <h4 className="font-italic">{year}</h4>
                            </Row>
                            <Row>
                                <h1 className="badge badge-success text-wrap test">
                                    {" "}
                                    Prix: {allArticles[id]?.price}
                                </h1>
                            </Row>
                            <Row>
                                <ModalBuy
                                    image={allArticles[id]?.image}
                                    price={allArticles[id]?.price}
                                    id={this.props.match.params.id}
                                    fullname={`${artists_sort} - ${title}`}
                                />
                            </Row>
                            <Row className="mt-5 justify-content-center">
                                <p>{notes}</p>
                            </Row>
                            <Row>
                                {labels &&
                                    labels.map((item) => {
                                        return (
                                            <Col>
                                                <p className="justify-content-center mt-1 badge badge-warning font-italic text-wrap">
                                                    {item.name}
                                                </p>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </Col>
                        <Col>
                            <img
                                src={allArticles[id]?.image}
                                alt={id}
                                width="300px"
                                className="mb-3 float-right"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5 mb-5">
                            <Table className="col-md-8 offset-md-2 table table-striped table-dark ">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Titre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tracklist &&
                                        tracklist.map((item) => {
                                            return (
                                                <tr key={id}>
                                                    <th>{item.position} </th>
                                                    <td>{item.title} </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row></Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default VinyleDetails;
