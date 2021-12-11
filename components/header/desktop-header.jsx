/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Flex, Image, Button, Input } from 'theme-ui';
import Link from 'next/link'
import socialItems from './social.data';
import LanguageSelector from './language-selector';
import { useTranslation } from "next-i18next";

export default function DeskHeader() {
    const { t } = useTranslation('common');

    return (

        <header>
            <Flex sx={styles.header}>

                <Box sx={styles.leftHeader}>
                    <Link href="/" passHref>
                        <Image src="img/logo.svg" alt="" />
                    </Link>
                </Box>

                <Box sx={styles.rightHeader}>

                    <Flex sx={styles.rightTopHeader}>

                        <Flex sx={styles.rightTopHeaderMenu}>

                            <LanguageSelector />

                            <Link href="#email" >
                                {t("header inscription newsletter")}
                            </Link>

                            <Link href="https://fr.tipeee.com/mieux-voter" >
                                {t("header soutien")}
                            </Link>

                        </Flex>

                        <Flex as="nav" sx={styles.socialNav}>
                            {socialItems.map((socialItem, i) => (
                                <Link href={socialItem.path} key={i} target="_blank">{socialItem.icon}</Link>
                            ))}
                        </Flex>

                    </Flex>

                    <hr sx={styles.divider} />

                    <Flex as="nav" sx={styles.menuNav}>

                        <Link href="le-jugement-majoritaire">
                            {t("menu lien 1")}
                        </Link>

                        <Link href="qui-sommes-nous">
                            {t("menu lien 2")}
                        </Link>

                        <Link href="faq">
                            {t("menu lien 3")}
                        </Link>

                        <Link href="presse">
                            {t("menu lien 4")}
                        </Link>

                        <Link href="contact">
                            {t("menu lien 5")}
                        </Link>

                    </Flex>

                </Box>

            </Flex>

            <Flex as="nav" sx={styles.menuNavTab}>

                <Link href="le-jugement-majoritaire">
                    {t("menu lien 1")}
                </Link>

                <Link href="qui-sommes-nous">
                    {t("menu lien 2")}
                </Link>

                <Link href="faq">
                    {t("menu lien 3")}
                </Link>

                <Link href="presse">
                    {t("menu lien 4")}
                </Link>

                <Link href="contact">
                    {t("menu lien 5")}
                </Link>
            </Flex>
        </header>
    );
}

const styles = {
    header: {
        backgroundImage: ['none', 'none', 'none', 'url("img/triangle-blue-up.svg")'],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: [null, null, null, '-2em 0em', '-5.5em 0em', '-1.5em 0em'],
        backgroundSize: 'contain',
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'column', 'row'],
        width: '90%',
        height: [null, null, null, '150px', '200px'],
        mx: 'auto',
    },
    leftHeader: {
        width: ['100%', '100%', '100%', '25%', '20%'],
        textAlign: 'center',
        cursor: 'pointer',
    },
    rightHeader: {
        width: ['100%', '100%', '100%', '65%', '70%'],
    },
    rightTopHeader: {
        justifyContent: ['space-around', 'end'],
        flexDirection: ['column', 'column', 'column', 'column', 'row'],
        a: {
            color: 'primary',
            ml: 3,
        },
    },
    rightTopHeaderMenu: {
        justifyContent: ['space-around', 'space-around', 'space-around', 'end'],
        alignContent: 'middle',
        a: {
            ml: 3,
            textDecoration: 'none',
            mt: 2,
        },
    },
    menuNav: {
        display: ['none', 'none', 'none', 'none', 'flex'],
        color: 'text',
        flexDirection: ['column', 'column', 'row'],
        textAlign: 'center',
        justifyContent: 'end',
        fontWeight: 'bold',
        a: {
            ml: 3,
            fontSize: ['1em', '1em', '0.5em', '0.8em', '1em'],
            color: 'text',
            textDecoration: 'none',
        },
    },
    menuNavTab: {
        display: ['flex', 'flex', 'flex', 'flex', 'none'],
        width: '90%',
        color: 'text',
        flexDirection: ['column', 'column', 'row'],
        textAlign: 'center',
        justifyContent: 'end',
        fontWeight: 'bold',
        a: {
            ml: 6,
            fontSize: ['1em', '1em', '0.8em', '1em'],
            color: 'text',
            textDecoration: 'none',
        },
    },
    socialNav: {
        flexDirection: 'row',
        justifyContent: ['center', 'center', 'center', 'end'],
        mt: [5, 5, 0],
        svg: {
            ml: [null, 3, 3],
            fill: '#2400FD',
            cursor: 'pointer',
            width: ['1.5em', '1.5em', '1em'],
            height: ['1.5em', '1.5em', '1em'],
            alignSelf: 'center',
        },
    },
    divider: {
        my: 4,
    },
}