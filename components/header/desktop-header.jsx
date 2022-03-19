/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "theme-ui";
import React, {useState} from "react";
import {Box, Text, Flex, Image, Button, Input, Link} from "theme-ui";
import socialItems from "./social.data";
import LanguageSelector from "./language-selector";
import {useTranslation} from "next-i18next";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";


export default function DeskHeader() {
  const {t} = useTranslation("common");
  const [isDropdowned, setDropdown] = useState(false);

  return (
    <header>
      <Flex sx={styles.header}>
        <Box sx={styles.leftHeader}>
          <Link href="/" passHref>
            <Image src="/img/logo.svg" alt="" />
          </Link>
        </Box>

        <Box sx={styles.rightHeader}>
          <Flex sx={styles.rightTopHeader}>
            <Flex sx={styles.rightTopHeaderMenu}>
              <LanguageSelector />

              <Link href="#email">{t("header inscription newsletter")}</Link>

              <Text as="a" target="blank" href="https://www.paypal.com/donate/?hosted_button_id=QD6U4D323WV4S">
                {t("header soutien")}
              </Text>

              {socialItems.map((socialItem, i) => (
                <Text as="a" href={socialItem.path} target="blank" key={i}>
                  {socialItem.icon}
                </Text>
              ))}
            </Flex>
          </Flex>

          <Flex sx={styles.flexDivider}>

            <hr sx={styles.divider} />

            <Flex as="nav" sx={styles.menuNav}>
              <div className="dropdown-wrapper">
                <div
                  className="dropdown-header"
                  onClick={() => setDropdown(!isDropdowned)}
                >
                  <span>{t("menu lien 1")}</span>
                  {isDropdowned
                    ? <FaAngleUp size="1.3em" />
                    : <FaAngleDown size="1.3em" />
                  }
                </div>
                {isDropdowned && (
                  <div
                    role="list"
                    className="dropdown-list"
                  >
                    <Link href="/le-jugement-majoritaire">
                      <div
                        className="dropdown-list-item lien-menu-jugement"
                      >
                        {t("menu sous lien 1")}
                      </div>
                    </Link>

                    <Link href="/faq">
                      <div
                        className="dropdown-list-item lien-menu-jugement">
                        {t("menu sous lien 2")}
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/qui-sommes-nous">{t("menu lien 2")}</Link>

              <Link href="/presse">{t("menu lien 4")}</Link>

              <Link href="/contact">{t("menu lien 5")}</Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>


    </header>
  );
}

const styles = {
  'header': {
    position: 'absolute',
  },
  header: {
    pt: "2%",
    backgroundImage: [
      "none",
      "none",
      "none",
      "none",
      'url("/img/triangle-blue-up.svg")',
    ],
    backgroundRepeat: "no-repeat",
    backgroundPosition: [
      null,
      null,
      null,
      "-2em top",
      "-5.5em top",
      "-1.5em top",
      "-5em top",
      "45% top",
    ],
    backgroundSize: "contain",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row"],
    width: "90%",
    mx: "auto",
  },
  leftHeader: {
    width: ["100%", "100%", "100%", "25%", "20%"],
    textAlign: "center",
    cursor: "pointer",
  },
  rightHeader: {
    width: ["100%", "100%", "100%", "65%", "70%"],
  },
  rightTopHeader: {
    justifyContent: ["space-around", "flex-end"],
    flexDirection: ["column", "column", "column", "column", "row"],
    a: {
      color: "#2400FD",
      ml: 3,
    },
  },
  rightTopHeaderMenu: {
    justifyContent: ["space-around", "space-around", "space-around", null],
    alignContent: "middle",
    a: {
      ml: 3,
      textDecoration: "none",
      mt: 3,
      fontSize: "14px",
      ':nth-of-type(3)': {
        ml: 5,
      },
    },
    svg: {
      color: '#2400FD',

    },
  },
  menuNav: {
    display: ["none", "flex"],
    color: "#0A004C",
    flexDirection: ["row"],
    textAlign: "center",
    justifyContent: ["space-evenly", "space-evenly", "space-evenly", "end"],
    fontWeight: "bold",
    a: {
      m: 4,
      fontSize: ["16px", "9px", "9px", "9px", "16px"],
      color: "#0A004C",
      textDecoration: "none",
      fontWeight: 'bold',
      ':nth-of-type(3)': {
        mr: '0px!important',
      },
    },
  },

  flexDivider: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  divider: {
    my: 4,
    alignSelf: 'end',
    width: ['100%', '100%', '100%', '90%', '80%', '80%', '70%'],
  },
};
