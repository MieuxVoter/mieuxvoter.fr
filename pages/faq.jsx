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


const loadFaqItem = (fullPath) => {
  const matter = require('gray-matter')
  const {readFileSync} = require('fs')

  const fileContents = readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {question: data.title, answer: content}
}

export const getStaticProps = async ({locale}) => {
  const {join} = require('path')
  const faqDir = join(process.cwd(), 'content/faq')
  const faqFiles = [
    join(faqDir, '1.md'),
    join(faqDir, '2.md'),
    join(faqDir, '3.md'),
    join(faqDir, '4.md'),
    join(faqDir, '5.md'),
    join(faqDir, '6.md'),
    join(faqDir, '7.md'),
    join(faqDir, '8.md'),
    join(faqDir, '9.md'),
    join(faqDir, '10.md'),
    join(faqDir, '11.md'),
    join(faqDir, '12.md'),
    join(faqDir, '13.md'),
    join(faqDir, '14.md'),
  ]
  return {
    props: {
      ...(await serverSideTranslations(locale, ["faq", "common"])),
      items: faqFiles.map(loadFaqItem)
    },
  }
};

const FaqItem = ({question, answer, eventKey}) => {
  return (<Accordion.Item eventKey={eventKey}>
    <Accordion.Header>
      {question}
    </Accordion.Header>
    <Accordion.Body>
      {answer.split('\n').map((row, i) => <p key={i}>{row}</p>)}
    </Accordion.Body>
  </Accordion.Item>)
}



export default function Faq(props) {
  const {t} = useTranslation('faq');
  const {items} = props;

  return (

    <section sx={styles.faq}>

      <Box sx={styles.containerFaq}>
        <Text sx={styles.titleFaq} as="h2">
          {t("titre")}
        </Text>
      </Box>

      <Box sx={styles.accordion}>

        <Accordion>
          {
            items.map(({question, answer}, index) => <FaqItem key={index} eventKey={index} question={question} answer={answer} />)
          }


        </Accordion>
      </Box>

      <Adherez />

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
