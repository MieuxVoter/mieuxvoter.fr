/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import ContactCard from '../components/contact-card';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default function Contact() {
    return (

        <section sx={styles.Contact}>
            <ContactCard />
        </section>
    );
}

const styles = {
    Contact: {
        backgroundImage: 'url("img/background-chevron-big-blue.svg")',
        backgroundSize: ['0px', '1000px', '1000px', '140%', '130%', '160%', '150%'],
        backgroundPosition: [null, '-250px 150px', '-100px 150px', '-12em 0em', '-15em -3em', '-23em -20em', '60% 30%'],
        backgroundRepeat: 'no-repeat',
        px: '30px',
        h2: {

        },
        p: {
            color: '#0A004C',
            my: ['30px'],
            fontSize: ['1em', '1em', '1em', '1.5vw'],
            width: '100%',
        },
        button: {
            backgroundColor: 'transparent',
            color: '#0A004C',
            border: 'solid 2px #0A004C',
            boxShadow: '0px 3px 0px 0px #0A004C',
            mr: 0,
        },
    },
}