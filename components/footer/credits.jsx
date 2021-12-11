/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Text, Flex } from 'theme-ui';
import Link from 'next/link'
import { useTranslation } from "next-i18next";
import LanguageSelector from '../header/language-selector';

export default function Credits() {
    const { t } = useTranslation('common');

    return (

        <Flex sx={styles.credits}>

            <Flex x sx={styles.leftCredits}>

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

            <LanguageSelector />
        </Flex>
    );
}

const styles = {
    credits: {
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row'],
        textAlign: ['center', 'center', 'left'],
        p: {
            color: '#8F88BA',
        },
        a: {
            fontWeight: 'bold',
            color: '#8F88BA',
        },
    },
    leftCredits: {
        width: [null, null, '60%', '50%', '40%'],
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row', 'row'],
    },
}