import * as React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

export const Dashboard = () => (
  <Card>
    <CardHeader title="Kale Borroka Records administration" />
    <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);
