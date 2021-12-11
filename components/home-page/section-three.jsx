/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button, Input, Image, Flex } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export default function SectionThree() {
    const { t } = useTranslation('homepage');

    return (

        <section sx={styles.sectionThree}>

            <Flex>

                <Flex sx={styles.containerSectionThree}>

                    <Image sx={styles.logoSectionThree} src="img/webapp-logo.svg" alt="" />

                    <Text sx={styles.titleSectionThree} as="h2">
                        {t("titre troisième section")}
                    </Text>

                    <Text sx={styles.box1SectionThree} as="p">
                        {t("texte troisième section")}
                    </Text>

                    <Flex sx={styles.formWebApp}>

                        <Flex sx={styles.inputFormWebapp}>

                            <BsArrowRight sx={styles.arrowInput} />

                            <Input placeholder={t("placeholder troisième section")} />

                        </Flex>

                        <Box sx={styles.boxButton2}>
                            <Button>{t("bouton troisième section")}<BsArrowRight sx={styles.arrow} /></Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </section>
    );
}

const styles = {
    sectionThree: {
        backgroundImage: 'url("img/background-chevron-white.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ['center 30em', 'center 35em', 'right'],
        backgroundSize: ['100%', '100%', '50%', '35%'],
        backgroundColor: 'primary',
        h2: {
            color: 'text_secondary',
            fontSize: ['2em', '2em', '3em', '2.5em', '2.5em'],
            lineHeight: '1',
            textAlign: ['center', 'center', 'center', 'left']
        },
        p: {
            color: 'text_secondary',
            my: ['30px'],
            fontSize: ['1em', '1em', '1em', '1.5vw'],
        },
        button: {
            backgroundColor: 'transparent',
            color: 'text_secondary',
            border: 'solid 2px white',
            boxShadow: '0px 3px 0px 0px white',
            mr: 0,
        },
    },
    containerSectionThree: {
        flexDirection: 'column',
        margin: '30px',
        width: [null, null, null, '80%', '76%'],
        ml: [null, null, null, '10%', '12%'],
        my: [10, 8, 8, 11],
    },
    titleSectionThree: {
        width: ['100%', '100%', '50%'],
    },
    box1SectionThree: {
        width: ['100%', '100%', '50%'],
    },
    logoSectionThree: {
        width: '150px',
        textAlign: 'center',
        display: ['none', 'inline-block'],
        alignSelf: [null, 'center', 'start'],
    },
    formWebApp: {
        width: ['100%', '100%', '100%', '100%', '70%'],
        flexDirection: ['column', null, 'row'],
    },
    inputFormWebapp: {
        width: ['100%', '100%', '60%', '58%'],
        mr: '2%',
        mb: 5,
        boxShadow: '0px 2px 0px 0px white',
        input: {
            border: 'none',
            '::placeholder': {
                color: 'text_secondary',
            },
        },
    },
    boxButton2: {
        width: ['100%', '100%', '40%', '42%'],

    },
    arrow: {
        verticalAlign: 'middle',
        fontSize: '2em',
        color: 'text_secondary',
    },
    arrowInput: {
        verticalAlign: 'middle',
        fontSize: '2em',
        height: '60px',
        color: 'text_secondary',
    }
}