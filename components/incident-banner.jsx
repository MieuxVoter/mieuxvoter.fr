/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Text, Close} from 'theme-ui';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {
  INCIDENT_PAGE_PATH,
  INCIDENT_BANNER_EXPIRY,
} from '../services/constants';

const DISMISS_KEY = 'incident-2026-06-banner-dismissed';

export default function IncidentBanner() {
  // Rendu masqué au SSR : on n'affiche qu'après montage côté client pour
  // éviter tout décalage d'hydratation (date et localStorage sont client-only).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() > new Date(INCIDENT_BANNER_EXPIRY);
    const dismissed = window.localStorage.getItem(DISMISS_KEY) === 'true';
    if (!expired && !dismissed) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, 'true');
    setVisible(false);
  };

  return (
    <Box sx={styles.banner} role="alert">
      <Box sx={styles.content}>
        <Text as="span" sx={styles.text}>
          Un incident de sécurité a affecté notre infrastructure fin juin 2026.{' '}
          <Link href={INCIDENT_PAGE_PATH}>
            <a sx={styles.link}>En savoir plus</a>
          </Link>
        </Text>
        <Close sx={styles.close} aria-label="Fermer" onClick={dismiss} />
      </Box>
    </Box>
  );
}

const styles = {
  banner: {
    position: 'fixed',
    zIndex: 9999,
    right: [2, 3],
    bottom: [2, 3],
    left: [2, 'auto'],
    maxWidth: [null, '380px'],
    backgroundColor: '#0A004C',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    p: 4,
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 3,
  },
  text: {
    fontSize: '15px',
    lineHeight: '22px',
  },
  link: {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  close: {
    color: 'white',
    cursor: 'pointer',
    flexShrink: 0,
  },
};
