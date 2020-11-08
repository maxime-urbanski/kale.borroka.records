import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import fb from "../Img/fb.png";
import pt from "../Img/pt.png";
import yt from "../Img/yt.png";
import styles from "../Styles/contact.module.css";
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      isSubmited: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactUs", ...this.state }),
    })
      .then((res) => {
        const status = res.status;
        console.log(status);
        this.setState({
          isSubmited: true,
          name: "",
          email: "",
          message: "",
        });
        alert("Message envoyée");
      })
      .catch((error) => {
        this.setState({ isError: true });
        console.log(error);
      });
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <Container>
          <Row>
            <Breadcrumb listTag="div" className={styles.breadCrumb}>
              <BreadcrumbItem tag={Link} to={"/"}>
                KALE BORROKA RECORDS
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                {t("contact")}
              </BreadcrumbItem>
            </Breadcrumb>
          </Row>
          <Row className={styles.formContact}>
            <Col lg={5} md={12} className={styles.blocLeft}>
              <Row className="mt-5">
                <h5>{t("acheter")}</h5>
              </Row>
              <Row className="mt-5">
                <h5>{t("partage")}</h5>
              </Row>
              <Row className="mt-5">
                <h5>{t("travail")}</h5>
              </Row>
            </Col>
            <Col md={12} lg={6} className={styles.test}>
              <Form id="contactUs" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className={styles.label} for="email">
                    {t("email")}
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id={styles.exampleEmail}
                    placeholder="Email..."
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className={styles.label} for="exampleSelect">
                    {t("categorie")}
                  </Label>
                  <Input type="select" name="select" id="select">
                    <option>{t("commande")}</option>
                    <option>{t("groupe")}</option>
                    <option>{t("autre")}</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label className={styles.label} for="message">
                    {t("message")}
                  </Label>
                  <Input
                    type="textarea"
                    bsSize="lg"
                    name="message"
                    id="exampleText"
                    onChange={this.onChange}
                    value={this.state.message}
                  />
                </FormGroup>
                <Button
                  color="primary"
                  type="submit"
                  className={`${styles.submit} mt-3`}
                >
                  Go !
                </Button>
              </Form>
            </Col>
          </Row>
          <hr className={styles.hr} />
          <Row className={styles.network}>
            <h3>{t("network")}</h3>
          </Row>
          <Row>
            <Col md={12} lg={4} className={styles.link}>
              <a
                className={styles.link2}
                href="https://www.facebook.com/kale.borroka.records"
              >
                <img src={fb} alt="" className={styles.logo} />
                <h6>{t("fb")}</h6>
              </a>
            </Col>
            <Col md={12} lg={4} className={styles.link}>
              <a
                className={styles.link2}
                href="mailto: kale.borroka.records@protonmail.com"
              >
                <img className={styles.logo} src={pt} alt="protonmail logo" />
                <h6>kale.borroka.records@protonmail.com</h6>
              </a>
            </Col>
            <Col md={12} lg={4} className={styles.link}>
              <a
                className={`${styles.link2} mb-5`}
                href="https://www.youtube.com/channel/UC0TA_as6DBQWwIqxLaBgc8Q/playlists"
              >
                <img
                  src={yt}
                  alt="https://www.youtube.com/channel/UC0TA_as6DBQWwIqxLaBgc8Q/playlists"
                  className={styles.logo}
                />
                <h6>{t("yt")}</h6>
              </a>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default withNamespaces()(ContactUs);
