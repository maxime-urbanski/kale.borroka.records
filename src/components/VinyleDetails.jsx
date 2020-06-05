import React from "react";
import Axios from "axios";
import { Container, Col, Row, Table } from "reactstrap";

import allArticles from "./disque";
import Footer from "./Footer";

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
            videos,
        } = this.state.lp;
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="cole-md-6">
                            <h1 className="mt-3 justify-content-center">
                                {artists_sort} - {title}
                            </h1>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="cole-md-6">
                            <Row>
                                <h3>{styles}</h3>
                            </Row>
                            <Row>
                                <h4>{year}</h4>
                            </Row>
                            <Row>
                                <h3> Prix: {allArticles[id]?.price}</h3>
                            </Row>
                            <Row className="mt-5 justify-content-center">
                                <p>{notes}</p>
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
                        <Col className="mt-5">
                            <Table className="col-md-8 offset-md-2 table table-striped table-dark">
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
                    <Row>
                        {videos &&
                            videos.map((item) => {
                                return (
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={item.uri}
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                );
                            })}
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default VinyleDetails;
