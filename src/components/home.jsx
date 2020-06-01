import React from "react";
import { Container } from "reactstrap";
import Article from "./article";
import SlickCover from "./SlickCover";

function Home() {
    return (
        <div>
            
            <Container>
                <Article />
            </Container>
            <SlickCover />
            
        </div>
    );
}

export default Home;
