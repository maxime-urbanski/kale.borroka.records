import React from "react";

import { Container, Row, Col } from "reactstrap";

import lp from "./Lp";
import "./menu.css";
import CardArticle from "./CardArticle";
import Footer from "./Footer";




$('#demo').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7,],
    pageSize: 5,
    showPrevious: false,
    showNext: false,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})



function LpList() {
    return (
        <div>
        <Container>
            <Col>
                <Row className="position">
                    <h1 className="mt-3 position">Tous nos LP/10"</h1>
                    <Row className="position">
                        {lp.map((item) => {
                            return item.quantity > 0 ? (
                                <CardArticle {...item} />
                            ) : (
                                ""
                            );
                        })}
                    </Row>
                </Row>
            </Col>
        </Container>
        <Footer />
        </div>
    );
}

export default LpList;
