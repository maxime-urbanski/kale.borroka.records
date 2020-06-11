import React from "react";
import { Container } from "reactstrap";
import Article from "./article";
import SlickCover from "./SlickCover";
import Footer from "./Footer";
import MiniArticle from "./MiniatureArticle ";

function Home() {
    return (
        <div>
            <Container>
                <MiniArticle />
                <Article />
            </Container>
            <SlickCover />
            <Footer />
        </div>
    );
}

export default Home;
