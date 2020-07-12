import React from "react";
import { Container } from "reactstrap";

import Footer from "../Footer/Footer";
import MiniArticle from "./MiniatureArticle ";
import Cover from "./SlickCover";
import How from "./How";

function Home() {
    return (
        <div>
            <Container>
                <MiniArticle />
            </Container>
            <Cover />
            <How />
            <Footer />
        </div>
    );
}

export default Home;
