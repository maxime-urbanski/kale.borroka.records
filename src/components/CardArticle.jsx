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

function CardArticle({id, image, name, artiste, format, price}) {    
  return (
    <Card className="m-5 cardSize" key={id}>
      <CardImg top width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>
          <h5>{artiste}</h5>
        </CardTitle>
        <br />
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{format}</CardSubtitle>
        <CardText>Prix: {price}</CardText>
        <Button tag={Link} to={`/${format}/${id}`}>
          More Info
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardArticle;
