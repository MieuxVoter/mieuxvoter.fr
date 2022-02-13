/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "theme-ui";
import React, {useState} from "react";
import {Box, Text, Flex, Image, Button, Input} from "theme-ui";
import Link from "next/link";
import socialItems from "./social.data";
import LanguageSelector from "./language-selector";
import {useTranslation} from "next-i18next";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";


const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
  <Link
    href="/le-jugement-majoritaire"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </Link>
));

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
                    <div
                      className="dropdown-list-item lien-menu-jugement"
                    >
                      <Link href="/le-jugement-majoritaire">
                        {t("menu sous lien 1")}
                      </Link>
                    </div>

                    <div
                      className="dropdown-list-item lien-menu-jugement">
                      <Link href="/faq">{t("menu sous lien 2")}</Link>
                    </div>
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

      { // For tablet display 
    }
      <Flex as="nav" sx={styles.menuNavTab}>
        <DropdownButton
          className="dropdownTab"
          id="dropdown-basic-button"
          title={t("menu lien 1")}
        >
          <Dropdown.Item className="lien-menu-jugement">
            <Link href="/le-jugement-majoritaire">{t("menu sous lien 1")}</Link>
          </Dropdown.Item>

          <Dropdown.Item className="lien-menu-jugement">
            <Link href="/faq">{t("menu sous lien 2")}</Link>
          </Dropdown.Item>
        </DropdownButton>

        <Link href="/qui-sommes-nous">{t("menu lien 2")}</Link>

        <Link href="/presse">{t("menu lien 4")}</Link>

        <Link href="/contact">{t("menu lien 5")}</Link>
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
      'url("img/triangle-blue-up.svg")',
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
    display: ["none", "none", "none", "none", "flex"],
    color: "#0A004C",
    flexDirection: ["column", "column", "row"],
    textAlign: "center",
    justifyContent: "end",
    fontWeight: "bold",
    a: {
      m: 4,
      fontSize: "16px",
      color: "#0A004C",
      textDecoration: "none",
      fontWeight: 'bold',
      ':nth-of-type(3)': {
        mr: '0px!important',
      },
    },
  },
  menuNavTab: {
    display: ["flex", "flex", "flex", "flex", "none"],
    width: "90%",
    color: "#0A004C",
    flexDirection: ["column", "column", "row"],
    textAlign: "center",
    justifyContent: "end",
    fontWeight: "bold",
    mx: "auto",
    a: {
      mx: "15px",
      fontSize: "16px",
      color: "#0A004C",
      textDecoration: "none",
    },
  },
  socialNav: {
    flexDirection: "row",
    justifyContent: ["center", "center", "center", "end"],
    mt: [5, 5, 0],
    svg: {
      ml: [null, 3, 3],
      fill: "#2400FD",
      cursor: "pointer",
      width: ["1.5em", "1.5em", "1em"],
      height: ["1.5em", "1.5em", "1em"],
      alignSelf: "center",
    },
  },
  flexDivider: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  divider: {
    my: 4,
    marginLeft: "auto",
    alignSelf: 'end',
    width: ['100%', '100%', '100%', '90%', '80%', '80%', '70%'],
  },
};
