import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import styles from "../Styles/pageShop.module.css";

import article from "./marchandise/Lp";
import CardArticle from "./CardArticle";
import PaginationDistro from "../Function/pagination";
import Footer from "../Footer/Footer";
import Collapse from "reactstrap/lib/Collapse";
import LParticle from "./marchandise/Lp";

class LpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "1",
      cardsPerPage: "9",
      isSearch: "moscow death brigade",
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState = { isSearch: e.target.value };
    const value = e.target.value;
    {
      LParticle.filter((i) => {
        return (
          <Collapse>
            <li>{i.artiste.toLowerCase().includes(value)}</li>
          </Collapse>
        );
      }).map((i) => {
        return <li>{i.artiste}</li>;
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 450);
  }

  render() {
    const { currentPage, cardsPerPage } = this.state;
    const indexLastCards = currentPage * cardsPerPage;
    const indexFirstCards = indexLastCards - cardsPerPage;
    const currentCards = article.slice(indexFirstCards, indexLastCards);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const pageNext = () => this.setState({ currentCards: currentPage + 1 });
    const pagePrev = () => this.setState({ currentCards: currentPage - 1 });
    const format = "LP";
    const { t } = this.props;

    const lpFiltered = currentCards.filter((e) => {
      return e.name.toLowerCase().includes(this.isSearch);
    });
    console.log(lpFiltered);

    return (
      <div>
        <Container>
          <Row>
            <Breadcrumb className={styles.breadCrumb} listTag="div">
              <BreadcrumbItem tag={Link} to={"/"}>
                KALE BORROKA RECORDS
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                LP &amp; 10"
              </BreadcrumbItem>
            </Breadcrumb>
            <Form className={styles.search}>
              <Input
                primary
                value={this.isSearch}
                onChange={this.handleChange}
                //onClick={this.handleClick}
                placeholder="ex: Moscow Death Brigade"
              />
            </Form>
          </Row>
          <Col>
            <Row className={styles.position}>
              <h1 className={styles.title}>{t("lp")}</h1>
              <Row className={styles.cardPosition}>
                {currentCards.map((item) => {
                  return item.quantity > 0 ? (
                    <Col xs={12} sm={6} lg={4} className={styles.position}>
                      <CardArticle {...item} key={item.id} />
                    </Col>
                  ) : (
                    ""
                  );
                })}
              </Row>
            </Row>
            <Row>
              <PaginationDistro
                cardsPerPage={cardsPerPage}
                totalCards={article}
                paginate={paginate}
                pageNext={pageNext}
                pagePrev={pagePrev}
                currentPage={currentPage}
                format={format}
              />
            </Row>
          </Col>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces()(LpList);
