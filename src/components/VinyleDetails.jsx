import React from "react";
import Axios from "axios";
import { Container, Col, Row, Table } from "reactstrap";

import allArticles from "./disque";

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
            <Container>
                <Col>
                    <Row>
                        <h1 className="mt-3 position">
                            {artists_sort} - {title}
                        </h1>
                    </Row>

                    <Row>
                        <Col>
                            <Row>
                                <h3>{styles}</h3>
                            </Row>
                            <Row>
                                <h4>{year}</h4>
                            </Row>
                        </Col>
                        <Col>
                            <img
                                src={allArticles[id]?.image}
                                alt={id}
                                width="300px"
                                className="mt-2 mb-3"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <p>{notes}</p>
                    </Row>
                    <Row>
                        <Table className="table table-striped table-dark">
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
                    </Row>
                    <Row>
                        <p> Prix: {allArticles[id]?.price}</p>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default VinyleDetails;
