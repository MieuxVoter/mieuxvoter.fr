/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Box, Text, Flex, Image, Button, Input } from "theme-ui";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import socialItems from "../header/social.data";
import Credits from "./credits";
import { useTranslation } from "next-i18next";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer sx={styles.footer}>
      <Flex sx={styles.topFooter}>
        <Box sx={styles.leftTopFooter}>
          <Link href="/" passHref>
            <Image src="img/logo.svg" alt="" />
          </Link>
          <Text as="p">{t("footer logo subtitle")}</Text>
        </Box>

        <Box sx={styles.rightTopFooter}>
          <Text as="h3">{t("footer newsletter")}</Text>
          <Flex id="newsletter" sx={styles.newsletterForm}>
            <Input
              type="email"
              name="email"
              id="email"
              mb={3}
              placeholder={t("footer placeholder newsletter")}
            />
            <Box sx={styles.boxButton}>
              <Button>
                {t("footer bouton newsletter")}
                <BsArrowRight sx={styles.arrow} />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <hr sx={styles.divider} />

      <Flex sx={styles.middleFooter}>
        <Flex as="nav" sx={styles.menuNav}>
          <DropdownButton id="dropdown-basic-button" title={t("menu lien 1")}>
            <Dropdown.Item href="le-jugement-majoritaire">
              {t("menu sous lien 1")}
            </Dropdown.Item>

            <Dropdown.Item href="faq">{t("menu sous lien 2")}</Dropdown.Item>
          </DropdownButton>

          <Link href="qui-sommes-nous">{t("menu lien 2")}</Link>

          <Link href="presse">{t("menu lien 4")}</Link>

          <Link href="contact">{t("menu lien 5")}</Link>
        </Flex>

        <Flex as="nav" sx={styles.socialNav}>
          {socialItems.map((socialItem, i) => (
            <Link href={socialItem.path} key={i}>
              {socialItem.icon}
            </Link>
          ))}
        </Flex>
      </Flex>

      <hr sx={styles.divider} />

      <Credits />
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#F8F8FF",
    pt: 8,
    pb: 6,
  },
  topFooter: {
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
    px: ["30px", "30px", "30px", "30px", 8],
  },
  leftTopFooter: {
    width: ["100%", "100%", "40%", "25%", "20%"],
    cursor: "pointer",
    mb: 7,
    p: {
      color: "#0A004C",
      width: "80%",
      fontSize: "18px",
      lineHeight: "20px",
      mt: 5,
      display: ["none", "none", "none", "block"],
    },
  },
  rightTopFooter: {
    width: ["100%", "100%", "55%", "65%", "60%"],
    h3: {
      width: ["100%", "100%", "100%", "60%"],
      fontSize: ["20px", "20px", "24px"],
      color: "#2400FD",
    },
    input: {
      width: ["100%", "100%", "100%", "60%"],
      border: "none",
      borderRadius: 0,
      boxShadow: "0px 2px 0px 0px #2400FD",
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "#2400FD",
        fontSize: "16px",
        fontStyle: "italic",
      },
    },
  },
  boxButton: {
    width: ["100%", "100%", "100%", "40%"],
    textAlign: ["center"],
    button: {
      backgroundColor: "#FFFFFF",
      color: "#2400FD",
      border: "solid 2px #2400FD",
      boxShadow: "0px 3px 0px 0px #2400FD",
    },
  },
  newsletterForm: {
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row"],
  },
  arrow: {
    verticalAlign: "middle",
    fontSize: "1.5em",
    color: "#2400FD",
    ml: 5,
  },
  middleFooter: {
    px: ["30px", "30px", "30px", "30px", 8],
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row"],
  },
  menuNav: {
    color: "#0A004C",
    fontWeight: "bold",
    flexDirection: ["column", "column", "row"],
    textAlign: ["center", "center", "left"],
    a: {
      mr: [null, 5],
      my: 4,
      fontSize: ["16px"],
      textDecoration: "none",
      color: "#0A004C",
    },
  },
  socialNav: {
    flexDirection: "row",
    justifyContent: "center",
    my: [7, 7, 0],
    svg: {
      ml: [null, null, 3],
      mx: 3,
      fill: "#2400FD",
      cursor: "pointer",
      width: ["20px", "30px", "30px", "20px", "30px"],
      height: ["20px", "30px", "30px", "20px", "30px"],
    },
  },
  divider: {
    my: 7,
  },
};
