/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Button, Input, Image, Flex } from 'theme-ui';
import Arrow from '../arrow';
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

                            <Arrow />

                            <Input sx={styles.input} placeholder={t("placeholder troisième section")} />

                        </Flex>

                        <Box sx={styles.boxButton2}>
                            <Button>{t("bouton troisième section")}<Arrow /></Button>
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
        backgroundPosition: ['center 40em', 'center 35em', 'right'],
        backgroundSize: ['100%', '100%', '50%', '35%'],
        backgroundColor: '#2400FD',
        h2: {
            color: '#FFFFFF',
            fontSize: ['44px', '56px'],
            lineHeight: ['44px', '56px'],
            textAlign: ['center', 'center', 'center', 'left'],
        },
        p: {
            color: '#FFFFFF',
            my: ['30px'],
            fontSize: ['17px'],
            lineHeight: '28.9px',
            textAlign: ['center', 'center', 'center', 'left'],
        },
        button: {
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            border: 'solid 2px white',
            boxShadow: '0px 3px 0px 0px white',
            mr: 0,
            width: ['100%', 'auto'],
        },
    },
    containerSectionThree: {
        flexDirection: 'column',
        margin: '24px',
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
            ml: ['31.5px', 0],
            '::placeholder': {
                color: '#FFFFFF',
                opacity: '1',
            },
            '::placeholder': {
                fontSize: '16px',
                lineHeight: '24px',
                color: 'white',
                fontStyle: 'italic',
            }
    
        },
        'img': {
            display: ['none', 'flex'],
            alignSelf: 'center',
        },
       
    },
    input: {
        '&:focus': {
            color: '#FFFFFF',
            border: 'none',
            boxShadow: 'none',
        },
    },
    boxButton2: {
        width: ['100%', '100%', '40%', '42%'],

    },
    arrowInput: {
        verticalAlign: 'middle',
        fontSize: '2em',
        height: '60px',
        color: '#FFFFFF',
    }
}