import React from "react";

import {
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";
import { Link } from "react-router-dom";

function CardArticle({ id, image, name, artiste, format, price }) {
    return (
        <div className="hvr-grow">
            <Card
                className="m-5 cardSize border-danger border-top-0 border-left-0 rounded-top shadow-lg p-3 mb-5 bg-white "
                key={id}
            >
                <CardImg
                    top
                    width="100%"
                    className="rounded-top"
                    src={image}
                    alt={name}
                />
                <CardBody>
                    <CardTitle>
                        <h5>{artiste}</h5>
                    </CardTitle>
                    <br />
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{format}</CardSubtitle>
                    <CardText>Prix: {price}</CardText>
                    <Button tag={Link} to={`/${format}/${id}`}>
                        Details
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardArticle;
