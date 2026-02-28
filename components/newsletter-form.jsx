import React, { useState } from 'react';

export const NewsletterForm = ({onSubmitResult}) => {

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