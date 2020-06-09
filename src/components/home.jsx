import React from "react";
import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import Article from "./article";
import SlickCover from "./SlickCover";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem listTag="div" active>
                                Home
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                </Col>
                <Article />
            </Container>
            <SlickCover />
            <Footer />
        </div>
    );
}

export default Home;
