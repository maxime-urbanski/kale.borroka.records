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
import style from "../Styles/details.module.css";

const ArticleDetail = (props) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { format, id } = useParams();
  const { image, name, artiste, price } = props.location.state;
  const { t } = props;
  const url = `https://api.discogs.com/releases/${id}`;
  const widhtScreen = screen.width;
  const opts2 = {
    height: "150",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };
  const opts = {
    height: "200",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => {
    window.scrollTo(0, 300);
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
  }, []);
  const { styles, tracklist, year, notes, labels, videos } = article;
  return (
    <div style={{ overflow: "hidden" }}>
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
          <Col className={`${style.top} mb-4`} xs={12} sm={12} lg={6}>
            <img
              id={style.image}
              src={image}
              alt={id}
              className="mb-3 float-right"
            />
          </Col>
          <Col className={style.top} xs={12} lg={6}>
            <Row className="mb-1">
              <h5>{styles && styles.join(" ")}</h5>
            </Row>
            <Row className="mb-1">
              <h4 className={style.year}>{year}</h4>
            </Row>
            <Row className="mb-1">
              <div className={style.badge}>
                <p className={style.price}>
                  {price === "Libre"
                    ? `${t("Libre")}` : `${t("prix")} ${price} `
                    }
                </p>
              </div>
            </Row>
            <Row>
              <ModalBuy
                image={image}
                id={id}
                fullname={`${artiste} - ${name}`}
              />
            </Row>
            <Row className="mt-5 justify-content-center">
              <h6>{notes}</h6>
            </Row>
          </Col>
        </Row>
        <Row className={style.labelBadge}>
          {labels &&
            labels.map((item, index) => {
              return (
                <Col xs={4} lg={2} className={style.badgeLabel} key={index}>
                  {item.name}
                </Col>
              );
            })}
        </Row>
        <Row className={style.label}>
          <Col xs={12} lg={7} className={style.labelBadge}>
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
        <Row className={`${style.label} mb-5`}>
          {videos &&
            videos
              .map((item, index) => {
                const uriId = item.uri.split("=")[1];
                return (
                  <div className={style.video} key={index}>
                    <Col xs={10} lg={4} className={style.video}>
                      <YouTube
                        videoId={uriId}
                        opts={widhtScreen < 600 ? opts2 : opts}
                      />
                    </Col>
                  </div>
                );
              })
              .slice(0, 3)}
        </Row>
      </Container>
    </div>
  );
};
export default withNamespaces()(ArticleDetail);
