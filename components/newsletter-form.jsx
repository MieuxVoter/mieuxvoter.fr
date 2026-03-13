import React, { useState } from 'react';
import {Box, Text, Flex, Image, Button, Input} from "theme-ui";
import ArrowBlue from './arrowBlue';
import {useTranslation} from "next-i18next";

export const NewsletterForm = ({onSubmitResult}) => {
  const {t} = useTranslation("common");

  const [email, setEmail] = useState('');
  const [piege, setPiege] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Chargement...');

    try {
      const response = await fetch('/.netlify/functions/newsletter-subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }), // On envoie juste l'email
      });

      if (response.ok) {
        setStatus('Merci ! Vous êtes inscrit.');
        setEmail('');
      } else {
        setStatus('Erreur lors de l\'inscription.');
      }
    } catch (err) {
      setStatus('Une erreur est survenue.');
    }
  };

  return (
    <form method='POST' name='newsletter' onSubmit={handleSubmit}>
      <Text as="h3">{t("footer newsletter")}</Text>
      <Flex id="newsletter" sx={styles.newsletterForm}>
        <Input
          type="email"
          name="email"
          id="email"
          mb={3}
          placeholder={t("footer placeholder newsletter")}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Box sx={styles.boxButton}>
          <Button>
            {t("footer bouton newsletter")}
            <ArrowBlue />
          </Button>
        </Box>
      </Flex>
      <input type="hidden" name="form-name" value="newsletter" />
      <div className="hidden">
        <label>Don’t fill this out if you’re human: <input name="piege" onChange={(e) => setPiege(e.target.value)}/></label>
      </div>
    </form>
  );
};

const styles = {
  newsletterForm: {
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "row"],
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
};
