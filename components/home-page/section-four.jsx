/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button, Input, Image, Flex } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export default function SectionFour() {
    const { t } = useTranslation('homepage');

    return (

        <section sx={styles.sectionFour}>

            <Flex sx={styles.containerSectionFour}>

                <Flex sx={styles.containerLeft}>

                    <Text sx={styles.titleSectionFour} as="h2">
                        {t("titre quatrième section")}
                    </Text>

                    <Text sx={styles.box1SectionFour} as="p">
                        {t("texte quatrième section")}
                    </Text>

                    <Box sx={styles.boxButton2}>
                        <Button>{t("bouton quatrième section")}<BsArrowRight sx={styles.arrow} /></Button>
                    </Box>
                </Flex>

                <Box sx={styles.containerRight}>
                    <Image src="img/image-8.png" alt="" />
                </Box>
            </Flex>
        </section>
    );
}

const styles = {
    sectionFour: {
        backgroundImage: ['url("img/red-stripe-up-right.svg"), url("img/red-stripe-up-left.svg")', 'url("img/red-stripe-up.svg"), url("img/red-stripe-down.svg")'],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ['right bottom, left bottom', 'right bottom, left top'],
        backgroundSize: ['23%', '14%'],
        px: '30px',
        h2: {
            color: 'text',
            fontSize: ['2em', '2em', '3em', '2.5em', '2.5em'],
            lineHeight: '1',
            textAlign: ['center', 'center', 'center', 'left'],
            width: '100%',
        },
        p: {
            color: 'text',
            my: ['30px'],
            fontSize: ['1em', '1em', '1em', '1.5vw'],
            width: '100%',
        },
        button: {
            backgroundColor: 'secondary',
            color: 'text_secondary',
            border: 'solid 2px white',
            boxShadow: '0px 3px 0px 0px white',
            mr: 0,
        },
    },
    containerLeft: {
        flexDirection: 'column',
        mt: '50px',
        ml: [null, '50px'],
        px: [null, '50px'],
        width: ['100%', '100%', '100%', '60%'],
    },
    containerRight: {
        width: ['40%'],
        display: ['none', 'none', 'none', 'inline-block'],
        alignSelf: 'end',
    },
    containerSectionFour: {
        width: [null, null, null, '72%'],
        pt: '12.3%',
        pb: ['30%', '12.3%'],
        mx: 'auto',
    },
    titleSectionFour: {
        width: ['100%', '100%', '50%'],
    },
    box1SectionFour: {
        width: ['100%', '100%', '50%'],
    },
    boxButton2: {
        textAlign: ['center', 'center', 'center', 'left'],
    },
    arrow: {
        verticalAlign: 'middle',
        fontSize: '2em',
        color: 'text_secondary',
        ml: 5,
    },
}