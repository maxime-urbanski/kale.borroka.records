import React from "react";
import { Container } from "reactstrap";
import Article from "./article";
import SlickCover from "./SlickCover";

function Home() {
    return (
        <div>
            <hr />
            <Container>
                <Article />
                <SlickCover />
            </Container>
        </div>
    );
}

export default Home;
