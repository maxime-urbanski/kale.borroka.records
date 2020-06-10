import React from "react";
import { Container } from "reactstrap";
import Article from "./article";
import SlickCover from "./SlickCover";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Container>
                <Article />
            </Container>
            <SlickCover />
            <Footer />
        </div>
    );
}

export default Home;
