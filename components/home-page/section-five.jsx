/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button, Input, Image, Flex } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'
import { useTranslation } from "next-i18next";
import PaypalButton from '../paypal-button';

export default function SectionFive() {
    const { t } = useTranslation('homepage');

    return (

        <section sx={styles.sectionFive}>

            <Flex sx={styles.containerSectionFive}>

                <Flex sx={styles.containerLeft}>

                    <Text sx={styles.titleSectionFive} as="h2">
                        {t("titre cinquième section")}
                    </Text>

                    <Text sx={styles.box1SectionFive} as="p">
                        {t("texte cinquième section")}
                    </Text>

                </Flex>

                <Box sx={styles.containerRight}>

                    <Box sx={styles.boxButton2}>
{/* <PaypalButton /> */}
                        <Link href="https://www.helloasso.com/associations/mieux-voter" passHref>
                            <Button>{t("bouton cinquième section")}<BsArrowRight sx={styles.arrow} /></Button>
                        </Link> 
                    </Box>
                </Box>
            </Flex>
        </section>
    );
}

const styles = {
    sectionFive: {
        backgroundImage: ['url("img/chevron-blue-down.svg")', 'url("img/chevron-blue-down.svg")', 'url("img/chevron-blue-down.svg")', 'url("img/background-chevron-big-blue-up-left.svg"), url("img/background-chevron-big-blue-up-right.svg")'],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ['bottom', 'bottom', 'bottom', 'left, right'],
        backgroundSize: 'contain',
        backgroundColor: 'background_secondary',
        width: ['100%', '100%', '86%'],
        pl: [null, null, null, '16%'],
        px: ['30px', null],
        py: [8, 8, 8, 0],
        h2: {
            color: '#FFFFFF',
            fontSize: ['44px', '40px'],
            lineHeight: '1',
            textAlign: ['center', 'center', 'center', 'left'],
            width: '100%',
        },
        p: {
            color: '#FFFFFF',
            my: ['30px'],
            fontSize: ['18px'],
            width: '100%',
            lineHeight: '1.2',
        },
        button: {
            backgroundColor: ['transparent', 'primary'],
            color: '#FFFFFF',
            border: 'solid 2px white',
            boxShadow: '0px 3px 0px 0px white',
            mr: 0,
        },
    },
    containerLeft: {
        flexDirection: 'column',
        width: ['100%', '100%', '100%', '50%'],
    },
    containerRight: {
        width: ['100%', '100%', '100%', '45%', '30%'],
        display: 'inline-block',
        alignSelf: 'center',
        justiftSelf: 'end',
    },
    containerSectionFive: {
        width: [null, null, null, '100%'],
        py: '10%',
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'column', 'row'],
    },
    titleSectionFive: {
        width: ['100%', '100%', '50%'],
        mb: [7, 7, 0],
    },
    box1SectionFive: {
        width: ['100%', '100%', '50%'],
        display: ['none', 'none', 'inline-block'],
    },
    boxButton2: {
        textAlign: ['center', 'center', 'center', 'left'],
    },
    arrow: {
        verticalAlign: 'middle',
        fontSize: '2em',
        color: '#FFFFFF',
        ml: 5,
    },
}