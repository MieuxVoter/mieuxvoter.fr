/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text} from 'theme-ui';
import Adherez from '../components/adherez';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["faq", "common"])),
  },
});

export default function Faq() {
  const {t} = useTranslation('faq');

  return (

    <section sx={styles.faq}>

      {/* <Box sx={styles.containerFaq}>
        <Text sx={styles.titleFaq} as="h2">
          {t("titre")}
        </Text>
      </Box>

      <Box sx={styles.accordion}>

        <Accordion>

          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {t("question 1")}
            </Accordion.Header>
            <Accordion.Body>
              {t("reponse 1")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {t("question 2")}
            </Accordion.Header>
            <Accordion.Body>
              {t("reponse 2.1")}
              <br />
              {t("reponse 2.2")}
              <br />
              {t("reponse 2.3")}
              <ul>
                <li>
                  {t("reponse 2.3.1")}
                  <ul>
                    <li>{t("reponse 2.3.1.1")} </li>
                    <li>{t("reponse 2.3.1.2")} </li>
                  </ul>
                </li>
                <li>{t("reponse 2.3.2")}</li>
                <li>{t("reponse 2.3.3")}</li>
                <li>{t("reponse 2.3.4")}</li>
                <li>{t("reponse 2.3.5")}</li>
              </ul>
              <br />
              {t("reponse 2.4")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {t("question 3")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 3.1")}
              <br />
              {t("reponse 3.2")}
              <ul>
                <li>{t("reponse 3.2.1")}</li>
                <li>{t("reponse 3.2.2")}</li>
                <li>{t("reponse 3.2.3")}</li>
                <li>{t("reponse 3.2.4")}</li>
                <li>{t("reponse 3.2.5")}</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {t("question 4")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 4.1")}
              <br />
              {t("reponse 4.2")}
              <br />
              {t("reponse 4.3")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {t("question 5")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 5")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {t("question 6")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 6.1")}
              <br />
              {t("reponse 6.2")}
              <br />
              {t("reponse 6.3")}
              <br />
              {t("reponse 6.4")}
              <br />
              {t("reponse 6.5")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              {t("question 7")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 7.1")}
              <br />
              {t("reponse 7.2")}
              <br />
              {t("reponse 7.3")}
              <br />
              {t("reponse 7.4")}
              <br />
              {t("reponse 7.4")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {t("question 8")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 8.1")}
              <br />
              {t("reponse 8.2")}
              <br />
              {t("reponse 8.3")}
              <br />
              {t("reponse 8.4")}
              <br />
              <ul>
                <li>{t("reponse 8.4.1")} </li>
                <li>{t("reponse 8.4.2")} </li>
              </ul>
              {t("reponse 8.5")}
              <br />
              {t("reponse 8.6")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              {t("question 9")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 9.1")}
              <br />
              {t("reponse 9.2")}
              <br />
              {t("reponse 9.3")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              {t("question 10")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 10.1")}
              <br />
              {t("reponse 10.2")}
              <br />
              {t("reponse 10.3")}
              <br />
              {t("reponse 10.4")}
              <br />
              {t("reponse 10.5")}
              <br />
              {t("reponse 10.6")}
              <br />
              {t("reponse 10.7")}
              <br />
              {t("reponse 10.8")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header>
              {t("question 11")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 11")}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="11">
            <Accordion.Header>
              {t("question 12")}
            </Accordion.Header>

            <Accordion.Body>
              {t("reponse 12")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Adherez /> */}

      <div id="accordion-faq"></div>
    </section>
  );
}

const styles = {
  faq: {
    pb: [0, 0, 10],
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',

    },
  },
  containerFaq: {
    flexDirection: 'column',
    margin: '30px',
    mb: 0,
    pl: ['5%', '5%', '5%', '7%'],
  },
  titleFaq: {

  },
  accordion: {
    pb: 9,
    pt: [5, 5, 9],
  },
}
