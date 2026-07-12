/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Box, Text} from 'theme-ui';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Incident() {
  return (

    <section sx={styles.incident}>

      <Box sx={styles.container}>

        <Text as="h2">
          Incident de sécurité — ce qui s’est passé et ce que nous avons fait
        </Text>

        <Text as="p" sx={styles.date}>
          Publié le 12/07/2026
        </Text>

        <Text as="p">
          Nous souhaitons vous informer en toute transparence d’un incident de
          sécurité qui a affecté l’infrastructure de Mieux Voter entre le 23 juin
          et le 7 juillet 2026.
        </Text>

        <Text as="h3">
          Ce qui s’est passé
        </Text>

        <Text as="p">
          Un tiers non autorisé a obtenu l’accès au compte d’hébergement de
          l’association, ce qui lui a permis de mettre temporairement hors ligne
          notre application et d’accéder à nos boîtes email associatives.
        </Text>

        <Text as="p">
          Les données concernées sont les suivantes :
        </Text>

        <ul>
          <li>
            Des informations relatives à quelques membres du conseil
            d’administration de l’association
          </li>
          <li>
            Le contenu de nos boîtes email de contact
          </li>
          <li>
            Les données des élections créées sur l’application (hors mail, la
            version actuelle de l’application ne les stocke pas)
          </li>
        </ul>

        <Text as="p">
          En revanche, nous avons pu vérifier les points suivants :
        </Text>

        <ul>
          <li>
            L’outil d’envoi d’emails de l’application n’a enregistré aucune
            connexion pendant la période de l’attaque
          </li>
          <li>
            Le CRM enregistrant les informations des formulaires du site
            mieuxvoter.fr n’a enregistré aucune connexion pendant cette période
          </li>
        </ul>

        <Text as="p">
          Suite à la découverte de l’incident, nous avons :
        </Text>

        <ul>
          <li>
            Repris le contrôle de nos accès et sécurisé l’ensemble de notre
            infrastructure
          </li>
          <li>
            Déposé une plainte auprès des autorités
          </li>
          <li>
            Notifié la CNIL conformément au RGPD
          </li>
          <li>
            Renforcé nos mesures de sécurité pour éviter qu’une telle situation
            se reproduise
          </li>
        </ul>

        <Text as="p">
          L’application fonctionne de nouveau normalement.
        </Text>

        <Text as="h3">
          Ce que vous devez savoir
        </Text>

        <Text as="p">
          L’application Mieux Voter, dans sa version actuelle, ne collecte pas de
          données personnelles identifiantes sur ses utilisateurs — pas de
          compte, pas de mot de passe, pas d’adresse IP enregistrée. Les votes
          sont anonymes.
        </Text>

        <Text as="p">
          Si vous faites partie des contacts de l’association et que vous avez
          des questions, vous pouvez nous écrire via{' '}
          <Link href="/contact">le formulaire</Link>.
        </Text>

        <Text as="p">
          Nous nous excusons pour cette situation et restons disponibles pour
          toute question.
        </Text>

        <Text as="p">
          L’équipe Mieux Voter
        </Text>

      </Box>

    </section>

  );
}

const styles = {
  incident: {
    pb: 10,
    h2: {
      fontSize: ['32px', '44px'],
      lineHeight: '1.1',
      textAlign: 'left',
    },
    h3: {
      fontSize: '28px',
      mt: 6,
    },
    p: {
      my: [2, '20px'],
      fontSize: ['18px'],
      lineHeight: '30.6px',
    },
    ul: {
      fontSize: ['18px'],
      lineHeight: '30.6px',
      pl: '20px',
      li: {
        my: 2,
      },
    },
  },
  container: {
    margin: '30px',
    mb: 0,
    width: [null, null, null, '80%'],
    mx: [null, null, null, 'auto'],
    pl: ['5%', '5%', '5%', '0'],
  },
  date: {
    fontStyle: 'italic',
    opacity: 0.7,
  },
};
