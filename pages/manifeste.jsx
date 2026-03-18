/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Flex, Button, Input, Select } from "theme-ui";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Status = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const COUNTRY_PREFIXES = [
  { label: "🇫🇷 (+33)", prefix: "+33" },
  { label: "🇧🇪 (+32)", prefix: "+32" },
  { label: "🇨🇭 (+41)", prefix: "+41" },
  { label: "🇱🇺 (+352)", prefix: "+352" },
  { label: "🇬🇧 (+44)", prefix: "+44" },
  { label: "🇩🇪 (+49)", prefix: "+49" },
  { label: "🇮🇹 (+39)", prefix: "+39" },
  { label: "🇪🇸 (+34)", prefix: "+34" },
  { label: "🇨🇦 (+1)", prefix: "+1" },
  { label: "🇺🇸 (+1)", prefix: "+1" },
];

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Manifeste() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [phoneError, setPhoneError] = useState("");
  const [piege, setPiege] = useState("");
  const [formData, setFormData] = useState({
    prenom: "",
    mail: "",
    phonePrefix: "+33",
    phoneNumber: "",
    codePostal: "",
    subscribeNewsletter: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phoneNumber") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === Status.LOADING || status === Status.SUCCESS) {
      return;
    }

    // Valider le numéro de téléphone
    if (formData.phoneNumber) {
      const cleanNumber = formData.phoneNumber.replace(/\s/g, "");
      // Vérifier que le numéro ne commence pas par 0
      if (cleanNumber.startsWith("0")) {
        setPhoneError("Le numéro ne doit pas commencer par 0. Exemple: 612345678");
        return;
      }
      // Vérifier que c'est un nombre valide
      if (!/^\d{9,}$/.test(cleanNumber)) {
        setPhoneError("Le numéro doit contenir au moins 9 chiffres");
        return;
      }
    }

    setStatus(Status.LOADING);

    try {

      const attributes = {
        PRENOM: formData.prenom,
        CODE_POSTAL: formData.codePostal,
        ACQUISITION_SOURCE: "mieuxvoter.fr - Manifeste",
        MANIFEST_SIGNED_VERSION: "2026-03 V1",
      }

      // Formater le numéro de téléphone avec le préfixe
      let fullPhone = "";
      if (formData.phoneNumber) {
        const cleanNumber = formData.phoneNumber.replace(/\s/g, "");

        if (cleanNumber) {
          fullPhone = `${formData.phonePrefix}${cleanNumber}`;
          attributes.SMS = fullPhone;
        }
      }

      const response = await fetch("/.netlify/functions/register-user", {
        method: "POST",
        body: JSON.stringify({
          email: formData.mail,
          piege,
          attributes,
          lists:subscribeNewsletter ? [3, 18] : [18]
        }),
      });

      if (response.ok) {
        setStatus(Status.SUCCESS);
        setFormData({ prenom: "", mail: "", phonePrefix: "+33", phoneNumber: "", codePostal: "", subscribeNewsletter: true });
        setPiege("");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus(Status.IDLE);
        }, 2000);
      } else {
        setStatus(Status.ERROR);
      }
    } catch (err) {
      setStatus(Status.ERROR);
      console.log(err);
    }
  };

  return (
    <>
    <section sx={styles.manifeste}>
      {/* Header */}
      <Box sx={styles.header}>
        <Text as="h1" sx={styles.title}>
          Manifeste pour une révolution électorale
        </Text>
        <Text sx={styles.tagline}>
          Parce que voter ne devrait plus être un choix binaire
        </Text>
      </Box>

      {/* Introduction */}
      <Box sx={styles.section}>
        <Text as="p">
          Notre système de vote a 200 ans et nos élections sont devenues archaïques. Nos modes de scrutin permettent peu d’expression et mesurent mal l’opinion. Nous ne voulons plus avoir à voter utile, blanc ou par défaut.
        </Text>
        <Text as="p">
          <b>Au XXIe siècle, il est temps que nos élections évoluent.</b> 
La logique du “tout ou rien” a certes structuré notre vie politique mais elle ne permet pas d’exprimer la richesse et la nuance de nos opinions.
        </Text>
        <Text as="p">
          Avec l’aide des sciences sociales et des mathématiques, des chercheurs ont développé des méthodes plus nuancées, plus justes et plus représentatives pour donner son opinion.
        </Text>
        <Text as="h3" sx={styles.sectionTitle}>
          <b>Chez Mieux Voter, nous pensons que :</b>
        </Text>
        <ul sx={styles.bulletList}>
          <li>
            le vote ne doit pas contraindre à choisir “le moins pire”, mais permettre d’évaluer réellement toutes les options
          </li>
          <li>
            chaque citoyen doit pouvoir exprimer son opinion de manière nuancée
          </li>
          <li>
            un scrutin doit mesurer l’opinion collective avec fidélité, au plus proche de l’opinion des votant•es
          </li>
        </ul>
        <Text as="p">
          Il est temps pour notre démocratie de sortir de la binarité et de se mettre à jour. Des outils nous le permettent aujourd’hui.
        </Text>
        <Text as="p">
          Chez Mieux Voter, nous portons le développement et la diffusion du Jugement Majoritaire : une méthode de vote qui permet à chaque électeur d’évaluer chaque option à l’aide d’une mention. Le résultat reflète ainsi la majorité des jugements, et non la seule répartition des préférences. Nous soutenons également la diffusion de tous les autres modes de scrutins plurinominaux, permettant de s’exprimer sur l’ensemble des candidat·es et non un·e seul·e.
        </Text>
        <Text as="p">
          Nous croyons qu’améliorer la manière de voter, c’est renforcer la confiance démocratique.
        </Text>
        <Text as="p">
          Nous croyons qu’un meilleur système de vote peut transformer la qualité du débat public.
        </Text>
        <Text as="p">
          Nous croyons qu’une démocratie plus expressive est une démocratie plus solide.
        </Text>
        <Text as="p">
          Nous croyons que c’est un changement urgent en période de grande fatigue démocratique.
        </Text>
        <Text as="p">
          Rejoignez notre mouvement pour une révolution électorale.
        </Text>
        <Text as="p">
          En rejoignant notre communauté, vous pourrez :
        </Text>
        <ul sx={styles.bulletList}>
          <li>Découvrir les principes et le fonctionnement du Jugement Majoritaire</li>
          <li>Contribuer à des expérimentations et projets citoyens</li>
          <li>Soutenir des campagnes pour la mise en oeuvre locale et/ou nationale de modes de scrutins plus expressifs
</li>
        </ul>
        <Text as="p">
          Laissez votre adresse e-mail pour rester informé·e et participer aux prochaines actions.
        </Text>
        <Text as="p">
          Votre adresse ne sera utilisée que pour vous transmettre nos informations et invitations.
        </Text>
        <Box sx={{
          mt: 6,
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          height: "150px",
          pointerEvents: "none",
          position: "sticky",
          bottom: "72px",
          marginTop: "0",
          zIndex: 99
        }} />
        <Box sx={{
          textAlign: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          py: 3,
          zIndex: 100,
          mt: -4
        }}>
          <Button
            onClick={() => setIsModalOpen(true)}
            sx={styles.ctaButton}
          >
            Je signe pour mieux voter
          </Button>
        </Box>
      </Box>
    </section>

    {/* Modal */}
    {isModalOpen && (
      <Box sx={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
        <Box
          sx={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <Text as="h2" sx={styles.modalTitle}>
            Je signe pour mieux voter
          </Text>

          {status === Status.LOADING && (
            <Box sx={styles.feedbackMessage}>
              <Text sx={{ color: "#2400FD" }}>Inscription en cours...</Text>
            </Box>
          )}

          {status === Status.SUCCESS && (
            <Box sx={styles.successMessage}>
              <Text sx={{ color: "#4CAF50", fontWeight: "bold" }}>
                Merci pour votre signature ! 🎉
              </Text>
            </Box>
          )}

          {status === Status.ERROR && (
            <Box sx={styles.errorMessage}>
              <Text sx={{ color: "#f44336", fontWeight: "bold" }}>
                Une erreur s&apos;est produite. Veuillez réessayer.
              </Text>
            </Box>
          )}

          {status !== Status.SUCCESS && (
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <label sx={styles.label}>
                  Prénom
                  <Input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder="Votre prénom"
                    required
                    disabled={status === Status.LOADING}
                    sx={styles.input}
                  />
                </label>
              </Box>
              <Box sx={{ mb: 3 }}>
                <label sx={styles.label}>
                  Mail
                  <Input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    required
                    disabled={status === Status.LOADING}
                    sx={styles.input}
                  />
                </label>
              </Box>
              <Box sx={{ mb: 3 }}>
                <label sx={styles.label}>Téléphone (optionnel)</label>
                <Flex sx={{ gap: 2, alignItems: "center" }}>
                  <Box sx={{ flex: "0 0 100px" }}>
                    <Select
                      name="phonePrefix"
                      value={formData.phonePrefix}
                      onChange={handleInputChange}
                      disabled={status === Status.LOADING}
                      sx={styles.select}
                    >
                      {COUNTRY_PREFIXES.map((country) => (
                        <option key={country.prefix} value={country.prefix}>
                          {country.label}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="612345678"
                      disabled={status === Status.LOADING}
                      sx={styles.input}
                    />
                    {phoneError && (
                      <Text sx={{ color: "#f44336", fontSize: "12px", mt: 1 }}>
                        {phoneError}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Box>
              <Box sx={{ mb: 3 }}>
                <label sx={styles.label}>
                  Code postal
                  <Input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    placeholder="Votre code postal"
                    disabled={status === Status.LOADING}
                    sx={styles.input}
                  />
                </label>
              </Box>

              <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="subscribeNewsletter"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subscribeNewsletter: e.target.checked,
                    }))
                  }
                  disabled={status === Status.LOADING}
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                    marginRight: "10px",
                    accentColor: "#0A004C",
                  }}
                />
                <label
                  htmlFor="subscribeNewsletter"
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#0A004C",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  S&apos;abonner à la newsletter
                </label>
              </Box>

              {/* Honeypot field */}
              <input type="hidden" name="form-name" value="signature" />
              <div className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input
                    name="piege"
                    onChange={(e) => setPiege(e.target.value)}
                  />
                </label>
              </div>

              <Flex sx={{ gap: 2, justifyContent: "flex-end" }}>
                <Button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setStatus(Status.IDLE);
                  }}
                  disabled={status === Status.LOADING}
                  sx={styles.buttonSecondary}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  disabled={status === Status.LOADING}
                  sx={styles.buttonPrimary}
                >
                  {status === Status.LOADING ? "⏳ Envoi..." : "Signer"}
                </Button>
              </Flex>
            </form>
          )}
        </Box>
      </Box>
    )}
    </>
  );
}

const styles = {
  manifeste: {
    px: ["30px", "30px", "60px"],
    py: [8, 10],
    color: "#0A004C",
    textAlign: "justify",
    h1: {
      fontSize: ["48px", "64px", "72px"],
      lineHeight: "1.2",
      fontWeight: 700,
      mb: 2,
    },
    h2: {
      fontSize: ["28px", "36px", "44px"],
      lineHeight: "1.3",
      fontWeight: 600,
    },
    h3: {
      fontSize: ["24px", "28px", "32px"],
      lineHeight: "1.3",
      fontWeight: 600,
      mt: 6,
      mb: 3,
    },
    p: {
      fontSize: ["16px", "18px"],
      lineHeight: "1.6",
      mb: 4,
      color: "#0A004C",
    },
    ul: {
      fontFamily: '"DM Sans", sans-serif',
      li: {
        fontSize: ["16px", "18px"],
        lineHeight: "1.6",
        mb: 2,
        color: "#0A004C",
        fontFamily: '"DM Sans", sans-serif',
      },
    },
  },
  header: {
    mb: 8,
    maxWidth: "900px",
    mx: "auto",
  },
  title: {},
  date: {
    fontSize: ["16px", "18px"],
    fontStyle: "italic",
    color: "#666",
    mb: 4,
  },
  subtitle: {
    fontSize: ["24px", "28px", "32px"],
    lineHeight: "1.4",
    fontWeight: 600,
    mb: 2,
  },
  tagline: {
    fontSize: ["16px", "18px"],
    color: "#666",
    fontWeight: 500,
    mb: 2,
  },
  section: {
    mb: 8,
    maxWidth: "900px",
    mx: "auto",
  },
  sectionTitle: {
    mt: 0,
  },
  bulletList: {
    paddingLeft: "24px",
    display: "inline-block",
    textAlign: "left",
    fontFamily: "inherit",
    li: {
      mb: 3,
      fontFamily: "inherit",
    },
  },
  listIntro: {
    fontWeight: 500,
    mb: 3,
  },
  ctaSection: {
    my: 10,
    maxWidth: "900px",
    mx: "auto",
    p: {
      mb: 3,
    },
  },
  ctaButton: {
    backgroundColor: "#0A004C",
    color: "white",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#1a0066",
    },
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "40px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  modalTitle: {
    fontSize: "28px",
    fontWeight: 600,
    mb: 4,
    color: "#0A004C",
  },
  label: {
    display: "block",
    fontWeight: 500,
    mb: 2,
    fontFamily: '"DM Sans", sans-serif',
    color: "#0A004C",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    marginTop: "6px",
    fontFamily: '"DM Sans", sans-serif',
    "&:focus": {
      outline: "none",
      borderColor: "#0A004C",
      boxShadow: "0 0 0 2px rgba(10, 0, 76, 0.1)",
    },
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    marginTop: "6px",
    fontFamily: '"DM Sans", sans-serif',
    backgroundColor: "white",
    color: "#0A004C",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      borderColor: "#0A004C",
      boxShadow: "0 0 0 2px rgba(10, 0, 76, 0.1)",
    },
  },
  buttonPrimary: {
    backgroundColor: "#0A004C",
    color: "white",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#1a0066",
    },
  },
  buttonSecondary: {
    backgroundColor: "#f0f0f0",
    color: "#0A004C",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover:not(:disabled)": {
      backgroundColor: "#e0e0e0",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
  feedbackMessage: {
    mb: 3,
    p: 2,
    textAlign: "center",
    borderRadius: "4px",
    backgroundColor: "#f0f5ff",
    fontSize: "16px",
  },
  successMessage: {
    mb: 3,
    p: 2,
    textAlign: "center",
    borderRadius: "4px",
    backgroundColor: "#f0f9f0",
    borderLeft: "4px solid #4CAF50",
    fontSize: "16px",
  },
  errorMessage: {
    mb: 3,
    p: 2,
    textAlign: "center",
    borderRadius: "4px",
    backgroundColor: "#fff3f3",
    borderLeft: "4px solid #f44336",
    fontSize: "16px",
  },
};
