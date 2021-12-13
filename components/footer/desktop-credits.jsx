/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Text, Flex } from 'theme-ui';
import Link from 'next/link'
import { useTranslation } from "next-i18next";
import LanguageSelector from '../header/language-selector-footer';

export default function DeskCredits() {
    const { t } = useTranslation('common');

    return (

        <Flex sx={styles.credits}>

            <Flex x sx={styles.leftCredits}>

                <Text as="p">
                    {t("credits copyright")}
                </Text>

                <Text as="p">
                    {t("credits développé par")}
                    <Link sx={styles.jimmy} href="https://jimmys-box.com/">
                        JIMMY
                     </Link>
                </Text>

            </Flex>

            <Link href="">
                {t("credits mentions")}
            </Link>

            <LanguageSelector />
            
        </Flex>
    );
}

const styles = {
    credits: {
        justifyContent: 'space-between',
        px: ['30px', '30px', '30px', '30px', 8],
        flexDirection: ['column', 'column', 'row'],
        textAlign: ['center', 'center', 'left'],
        p: {
            color: '#8F88BA',
            my: 5,
        },
        a: {
            fontWeight: 'bold',
            color: '#8F88BA',
            my: 5,
        },
    },
    leftCredits: {
        width: [null, null, '60%', '50%', '50%'],
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row', 'row'],
    },
}