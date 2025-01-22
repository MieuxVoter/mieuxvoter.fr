/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {Box, Text, Link} from 'theme-ui';
import Adherez from '../components/adherez';
import PresseContent from '../components/presse-content';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps = async ({locale}) => {
  const matter = require('gray-matter');
  const {readFileSync} = require('fs')

  const {join} = require('path')
  const jsonData = join(process.cwd(), 'content/presse.json')
  const mdFolder = join(process.cwd(), 'content/presse')

  const files = require('fs').readdirSync(mdFolder);
  const items = files.map((filename) => {
    const filePath = join(mdFolder, filename);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content, filename };
  });

  const fileContents = readFileSync(jsonData, 'utf8')
  const {data, content} = matter(fileContents)

  const articles = JSON.parse(content).concat(items.map(item => {
    const data = item.data;
    
    return {
      thumb:data.thumb, 
      source: "Mieux Voter", 
      altText: data.title,
      title: data.title,
      author: data.author,
      date: data.date,
      lien: `presse/${item.filename.replace(/\.mdx$/, '')}`
    }
  }));

  articles.sort((a, b) => {
    return new Date(b.date)-new Date(a.date); 
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ["presse", "common"])),
      items: articles,
    },
  }
};


export default function Presse(props) {
  const {t} = useTranslation('presse');

  return (
    <section sx={styles.presse}>

      <Box sx={styles.sectionThree}>

        <Box sx={styles.containerThree}>

          <Box sx={styles.sectionTitle} >
            <Text as="h2">
              {t("titre presse")}
            </Text>
          </Box>

          <PresseContent items={props.items} />

        </Box>

      </Box>
      <Box sx={styles.containerThree}>
        <p>Vous êtes journaliste ? Nous vous répondons par mail : <Link href="mailto:contact@mieuxvoter.fr">contact@mieuxvoter.fr</Link></p>
      </Box>
      <Adherez />
    </section>
  );
}

const styles = {
  containerThree: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  sectionThree: {
    py: 9,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
      ml: ['10%', '15%', '5%'],
    },
  },
  sectionTitle: {
    width: ['100%', '100%', '100%', '20%'],
  },
}
