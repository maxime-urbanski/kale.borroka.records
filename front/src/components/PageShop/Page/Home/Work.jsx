import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styles from "../../../Styles/work.module.css";
import logo from "../../../Img/icon.jpg";
import { withNamespaces } from "react-i18next";
import axios from "axios";

function Work({ t }) {
  const [test, setTest] = useState([]);
  useEffect(() => {
    const testApi = async () => {
      try {
        const data = await axios.get("http://localhost:5050/api/album");
        const result = data.data;
        setTest(result);
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
    };
  }, []);
  console.log("result =>", test);
  return (
    <>
      <Container>
        <div className={styles.work}>
          <img src={logo} alt="" className={styles.logo} />
          <hr className={styles.hr} />
          <h2>{t("construction")}</h2>
        </div>
      </Container>
    </>
  );
}

export default withNamespaces()(Work);
