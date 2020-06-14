import React from "react";
import { Container } from "reactstrap";

import Footer from "./Footer";
import MiniArticle from "./MiniatureArticle ";
import Cover from "./SlickCover";




function Home() {
    return (
        <div>
            <Container>
                <MiniArticle />                
            </Container>       
            <Cover />
            <Footer />
        </div>
    );
}

export default Home;
