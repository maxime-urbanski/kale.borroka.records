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
import allArticles from "./Marchandise/disque";
import ModalBuy from "./ModalBuy";
import Footer from "../Footer/Footer";
import style from "../Styles/details.module.css";
const ArticleDetail = ({
  artists_sort,
  title,
  styles,
  tracklist,
  year,
  notes,
  labels,
  videos,
  t,
}) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { format, id } = useParams();

  const url = `https://api.discogs.com/releases/${id}`;
  useEffect(() => {
    const getInfo = async () => {
      console.log("je suis la");
      try {
        const data = await Axios.get(url);
        const result = data.data;
        console.log("result =>", result);
        setArticle([result]);
      } catch (err) {
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };
    getInfo();
  }, []);
  return (
    <div>
      {console.log("artise ", article && article.artists_sort)}
      <Container>
        <Breadcrumb className={style.breadCrumb} listTag="div">
          <BreadcrumbItem tag={Link} to={"/"}>
            KALE BORROKA RECORDS
          </BreadcrumbItem>
          <BreadcrumbItem tag={Link} to={`/${allArticles[id]?.format}`}>
            {allArticles[id]?.format}
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            {article.artists_sort - title}
          </BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col>
            <h2 className={style.title}>
              {artists_sort} - {title}
            </h2>
          </Col>
        </Row>
        <hr className={style.hr} />
        <Row className={style.postionTop}>
          <Col className={style.top} xs={12} lg={6}>
            <Row>
              <h3>
                {styles && styles[0]} {styles && styles[1]}{" "}
                {styles && styles[2] ? styles && styles[2] : ""}
              </h3>
            </Row>
            <Row>
              <h4 className={style.year}>{year}</h4>
            </Row>
            <Row>
              <div className={style.badge}>
                <p className={style.price}>Prix</p>
              </div>
            </Row>
            <Row>
              <ModalBuy
                image={allArticles[id]?.image}
                price={allArticles[id]?.price}
                id={id}
                fullname={`${artists_sort} - ${title}`}
              />
            </Row>
            <Row className="mt-5 justify-content-center">
              <p>{notes}</p>
            </Row>
          </Col>
          <Col className={style.top} xs={12} sm={6} lg={6}>
            <img
              src={allArticles[id]?.image}
              alt={id}
              width="350px"
              className="mb-3 float-right"
            />
          </Col>
        </Row>
        <Row className={style.label}>
          {labels &&
            labels.map((item) => {
              return (
                <Col xs={12} lg={3} className={style.badgeLabel}>
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
                  tracklist.map((item) => {
                    return (
                      <tr key={id}>
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
              .map((item) => {
                const uriId = item.uri.split("=")[1];
                return (
                  <div className={style.video}>
                    <Col lg={2} className={style.video}>
                      <YouTube
                        videoId={uriId}
                        opts={opts}
                        onReady={this._onReady}
                      />
                    </Col>
                  </div>
                );
              })
              .slice(1, 3)}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default withNamespaces()(ArticleDetail);
