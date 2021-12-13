/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Text, Flex } from 'theme-ui';
import Link from 'next/link'
import { useTranslation } from "next-i18next";
import LanguageSelectorMobile from '../header/language-selector-footer-mobile';

export default function MobCredits() {
    const { t } = useTranslation('common');

    return (

        <Flex sx={styles.credits}>

            <Flex sx={styles.leftCredits}>

                <LanguageSelectorMobile />

                <Text as="p">
                    {t("credits copyright")}
                </Text>

                <Text as="p">
                    {t("credits développé par")}
                    <Link sx={styles.jimmy} href="https://jimmys-box.com/" target="_blank">
                        JIMMY
                     </Link>
                </Text>

            </Flex>

            <Link href="" target="_blank">
                {t("credits mentions")}
            </Link>

            
        </Flex>
    );
}

const styles = {
    language: {
        width: '50%!important',
    },
    credits: {
        
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row'],
        textAlign: ['center', 'center', 'left'],
        p: {
            color: '#8F88BA',
            my: 5,
            fontSize: '14px',
        },
        a: {
            fontWeight: 'bold',
            color: '#8F88BA',
            my: 5,
            fontSize: '14px',
        },
    },
    leftCredits: {
        width: [null, null, '60%', '50%', '50%'],
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row', 'row'],
    },
}