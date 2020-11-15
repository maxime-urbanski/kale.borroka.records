import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
const ResultSearch = ({ array, articleSuggestions }) => {
  return (
    <>
      {array
        .filter((articleSuggestion) => {
          return (
            articleSuggestion.artiste
              .toLowerCase()
              .includes(articleSuggestions.toLowerCase()) ||
            articleSuggestion.name
              .toLowerCase()
              .includes(articleSuggestions.toLowerCase())
          );
        })
        .map((articleSuggestion) => {
          return (
            <>
              {articleSuggestions.length !== 0 && (
                <Link
                  key={articleSuggestion.id}
                  to={{
                    pathname: `/${articleSuggestion.format}/${articleSuggestion.id}`,
                    state: {
                      image: articleSuggestion.image,
                      name: articleSuggestion.name,
                      artiste: articleSuggestion.artiste,
                      price: articleSuggestion.price,
                    },
                  }}
                >
                  <li>
                    <Row>
                      <Col lg={3}>
                        <img
                          style={{
                            width: "60px",
                            margin: "5px 0 ",
                            padding: "0",
                          }}
                          src={articleSuggestion.image}
                        />
                      </Col>
                      <Col lg={8}>
                        <h5 style={{ margin: "5px 0 5px", padding: "0" }}>
                          {articleSuggestion.artiste}
                        </h5>
                        <h6>{articleSuggestion.name}</h6>
                      </Col>
                    </Row>
                  </li>
                </Link>
              )}
            </>
          );
        })
        .slice(0, 10)}
    </>
  );
};

export default ResultSearch;
