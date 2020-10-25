import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styles from "../Styles/pageShop.module.css";
import CardArticle from "./CardArticle";
import Footer from "../Footer/Footer";
import fanzine from "./marchandise/Fanzine";

class fanzineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "1",
      cardsPerPage: "9",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(10, 0);
  }
  render() {
    const { currentPage, cardsPerPage } = this.state;
    const indexLastCards = currentPage * cardsPerPage;
    const indexFirstCards = indexLastCards - cardsPerPage;
    const currentCards = fanzine.slice(indexFirstCards, indexLastCards);

    // const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    // const format = "fanzine";
    const { t } = this.props;

    return (
      <>
        <Container>
          <Breadcrumb className={styles.breadCrumb} listTag="div">
            <BreadcrumbItem tag={Link} to={"/"}>
              KALE BORROKA RECORDS
            </BreadcrumbItem>
            <BreadcrumbItem tag={Link} to={"/divers"}>
              {t("divers")}
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              FANZINE
            </BreadcrumbItem>
          </Breadcrumb>
          <Col xs={12}>
            <Row className={styles.position}>
              <h1 className={styles.title}>{t("fanzines")}</h1>
            </Row>
            <Row className={styles.cardPosition}>
              {currentCards.map((item) => {
                return item.quantity > 0 ? (
                  <Col xs={12} sm={6} lg={4}>
                    <CardArticle {...item} key={item.id} />
                  </Col>
                ) : (
                  ""
                );
              })}
            </Row>
            {/* <Row>

            {/* <Row>

                            <PaginationDistro
                                cardsPerPage={cardsPerPage}
                                totalCards={fanzineList}
                                paginate={paginate}
                                format={format}
                            />
                        </Row> */}
          </Col>
        </Container>
        <Footer />
      </>
    );
  }
}
export default withNamespaces()(fanzineList);
