/* eslint react/prop-types: 0 */
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import Link from "next/link";
import { Image } from "theme-ui";
import { useTranslation } from "next-i18next";
import socialItems from "./social.data";
import LanguageSelector from "./language-selector";
import Accordion from "react-bootstrap/Accordion";

const MobHeader = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  const { t } = useTranslation("common");

  return (
    <header className="mobile-header">
      <Navbar light className="nav-mobile" expand="md">
        <div className="navbar-header">
          <Link href="/">
            <a className="navbar-brand">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <Image src="img/logo.svg" alt="" height="50" />
                </div>
              </div>
            </a>
          </Link>

          <Button onClick={toggle} className="navbar-toggle">
            <Image src="img/menu-icon.svg" alt="" height="50" />
          </Button>
        </div>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navbar-nav-scroll" navbar>
            <div className="d-flex flex-row justify-content-between">
              <Link href="/">
                <a className="navbar-brand navbar-brand-mobile">
                  <Image src="img/logo-mobile.svg" alt="logo" height="80" />
                </a>
              </Link>

              <Button onClick={toggle} className="navbar-toggle">
                <Image height="20" src="img/close-button.svg" alt="logo" />
              </Button>
            </div>
            <div>
              <NavItem>
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    className="navbar-accordion-item"
                  >
                    <Accordion.Header className="navbar-accordion accordion-header-mobile">
                      {t("menu lien 1")}
                    </Accordion.Header>
                    <Accordion.Body className="navbar-accordion-body">
                      <Link href="/le-jugement-majoritaire">
                        <a onClick={toggle} className="navbar-my-link nav-link">
                          {t("menu sous lien 1")}
                        </a>
                      </Link>
                      <Link href="/faq">
                        <a onClick={toggle} className="navbar-my-link nav-link">
                          {t("menu sous lien 2")}
                        </a>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </NavItem>

              <NavItem>
                <Link href="/qui-sommes-nous">
                  <a onClick={toggle} className="navbar-my-link nav-link">
                    {t("menu lien 2")}
                  </a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/presse">
                  <a onClick={toggle} className="navbar-my-link nav-link">
                    {t("menu lien 4")}
                  </a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <a onClick={toggle} className="navbar-my-link nav-link">
                    {t("menu lien 5")}
                  </a>
                </Link>
              </NavItem>

              <NavItem className="social-nav">
                {socialItems.map((socialItem, i) => (
                  <Link href={socialItem.path} key={i}>
                    <a
                      onClick={toggle}
                      className="navbar-my-link nav-link navbar-social-icon"
                    >
                      {socialItem.icon}
                    </a>
                  </Link>
                ))}
              </NavItem>
            </div>
            <NavItem className="navbar-credits-container">
              <LanguageSelector style={{ width: "80px" }} />

              <Link href="/">
                <a onClick={toggle} className="navbar-credits-link nav-link">
                  {t("credits mentions")}
                </a>
              </Link>

              <p className="navbar-credits">{t("credits copyright")}</p>

              <div className="d-flex">
                <p className="navbar-jimmy-link">
                  {t("credits développé par")}
                </p>

                <Link href="https://jimmys-box.com/">
                  <a onClick={toggle} className="navbar-jimmy-link">
                    JIMMY
                  </a>
                </Link>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default MobHeader;
