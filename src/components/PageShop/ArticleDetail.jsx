import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Container,
  Col,
  Row,
  Table,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import YouTube from "react-youtube";
import ModalBuy from "./ModalBuy";
import Footer from "../Footer/Footer";
import style from "../Styles/details.module.css";

const ArticleDetail = (props) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { format, id } = useParams();
  const { image, name, artiste, price } = props.location.state;
  const { t } = props;
  const url = `https://api.discogs.com/releases/${id}`;
  const opts = {
    height: "200",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await Axios.get(url);
        const result = data.data;
        setArticle(result);
      } catch (err) {
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };
    getInfo();
  },[]);
  const { styles, tracklist, year, notes, labels, videos } = article;
  return (
    <div>
      <Container>
        <Breadcrumb className={style.breadCrumb} listTag="div">
          <BreadcrumbItem tag={Link} to={"/"}>
            KALE BORROKA RECORDS
          </BreadcrumbItem>
          <BreadcrumbItem tag={Link} to={`/${format}`}>
            {format}
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            {artiste} - {name}
          </BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col>
            <h2 className={style.title}>
              {artiste} - {name}
            </h2>
          </Col>
        </Row>
        <hr className={style.hr} />
        <Row className={style.postionTop}>
          <Col className={style.top} xs={12} lg={6}>
            <Row>
              <h5>{styles && styles.join(" ")}</h5>
            </Row>
            <Row>
              <h4 className={style.year}>{year}</h4>
            </Row>
            <Row>
              <div className={style.badge}>
                <p className={style.price}>
                  {`${t("prix")}`}
                  {`${t(price)}`}
                </p>
              </div>
            </Row>
            <Row>
              <ModalBuy
                image={image}
                price={`${t("prix")}: ${t(`${price}`)}`}
                id={id}
                fullname={`${artiste} - ${name}`}
              />
            </Row>
            <Row className="mt-5 justify-content-center">
              <h6>{notes}</h6>
            </Row>
          </Col>
          <Col className={style.top} xs={12} sm={6} lg={6}>
            <img
              src={image}
              alt={id}
              width="350px"
              className="mb-3 float-right"
            />
          </Col>
        </Row>
        <Row className={style.label}>
          {labels &&
            labels.map((item, index) => {
              return (
                <Col xs={12} lg={3} className={style.badgeLabel} key={index}>
                  <p className={style.name}>{item.name}</p>
                </Col>
              );
            })}
        </Row>
        <Row className={style.label}>
          <Col xs={12} lg={10}>
            <Table
              responsive
              className="table table-striped table-dark "
              width="300px"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("titre")}</th>
                </tr>
              </thead>
              <tbody>
                {tracklist &&
                  tracklist.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{item.position} </th>
                        <td>{item.title} </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <hr className={style.hr} />
        <Row className={style.label}>
          {videos &&
            videos
              .map((item, index) => {
                const uriId = item.uri.split("=")[1];
                return (
                  <div className={style.video} key={index}>
                    <Col lg={2} className={style.video}>
                      <YouTube videoId={uriId} opts={opts} />
                    </Col>
                  </div>
                );
              })
              .slice(0, 3)}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default withNamespaces()(ArticleDetail);
