import React from "react";
import Axios from "axios";
import { Container, Col, Row } from "reactstrap";

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
        const img = this.props.location.pathname
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
                        <img src={`./img${img}`} alt="" />
                        <h1 className="mt-5 position">
                            {artists_sort} - {title}
                        </h1>
                    </Row>
                    <Row>
                        <h3>{styles}</h3>
                    </Row>
                    <Row>
                        <p>{year}</p>
                    </Row>
                    <Row>
                        <p>{notes}</p>
                    </Row>
                    <Row>
                        <p>{""}</p>
                    </Row>
                    <Row>
                        oi
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default VinyleDetails;
