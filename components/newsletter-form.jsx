import React, { useState } from 'react';
import {Box, Text, Flex, Image, Button, Input} from 'theme-ui';
import ArrowBlue from './arrowBlue';
import {useTranslation} from 'next-i18next';

const Status = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
}

export const NewsletterForm = ({onSubmitResult}) => {
  const {t} = useTranslation('common');

  const [email, setEmail] = useState('');
  const [piege, setPiege] = useState('');
  const [status, setStatus] = useState(Status.IDLE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status == Status.LOADING || status == Status.SUCCESS) {
      return;
    }

    setStatus(Status.LOADING);

    try {
      const response = await fetch('/.netlify/functions/newsletter-subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, piege }), // On envoie l'email et le piège
      });

      if (response.ok) {
        console.log('OK');
        setStatus(Status.SUCCESS);
        setEmail('');
      } else {
        console.log(response);
        setStatus(Status.ERROR);
      }
    } catch (err) {
      setStatus(Status.ERROR);
      console.log(err);
    }
  };

  return (
    <form method='POST' name='newsletter' onSubmit={handleSubmit}>
      <Text as='h3'>{t('footer newsletter')}</Text>

      {status === Status.LOADING && (
        <Box sx={styles.feedbackMessage}>
          <Text sx={{color: '#2400FD'}}>{t('footer newsletter registering')}</Text>
        </Box>
      )}

      {status === Status.SUCCESS && (
        <Box sx={styles.successMessage}>
          <Text sx={{color: '#4CAF50', fontWeight: 'bold'}}>{t('footer newsletter registered')}</Text>
        </Box>
      )}

      {status === Status.ERROR && (
        <Box sx={styles.errorMessage}>
          <Text sx={{color: '#f44336', fontWeight: 'bold'}}>{t('footer newsletter error')}</Text>
        </Box>
      )}

      {status === Status.IDLE && (
        <Flex id='newsletter' sx={styles.newsletterForm}>
          <Input
            type='email'
            name='email'
            id='email'
            mb={3}
            placeholder={t('footer placeholder newsletter')}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Box sx={styles.boxButton}>
            <Button>
              {t('footer bouton newsletter')}
              <ArrowBlue />
            </Button>
          </Box>
        </Flex>
      )}

      {status === Status.SUCCESS && (
        <Flex id='newsletter' sx={styles.newsletterForm}>
          <Input
            type='email'
            name='email'
            id='email'
            mb={3}
            placeholder={t('footer placeholder newsletter')}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          <Box sx={styles.boxButton}>
            <Button disabled>
              {t('footer bouton newsletter')}
              <ArrowBlue />
            </Button>
          </Box>
        </Flex>
      )}

      {status === Status.ERROR && (
        <Flex id='newsletter' sx={styles.newsletterForm}>
          <Input
            type='email'
            name='email'
            id='email'
            mb={3}
            placeholder={t('footer placeholder newsletter')}
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <Box sx={styles.boxButton}>
            <Button>
              {t('footer bouton newsletter')}
              <ArrowBlue />
            </Button>
          </Box>
        </Flex>
      )}

      {status === Status.LOADING && (
        <Flex id='newsletter' sx={styles.newsletterForm}>
          <Input
            type='email'
            name='email'
            id='email'
            mb={3}
            placeholder={t('footer placeholder newsletter')}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            value={email}
          />
          <Box sx={styles.boxButton}>
            <Button disabled>
              ⏳ Envoi...
              <ArrowBlue />
            </Button>
          </Box>
        </Flex>
      )}

      <input type='hidden' name='form-name' value='newsletter' />
      <div className='hidden'>
        <label>Don&apos;t fill this out if you&apos;re human: <input name='piege' onChange={(e) => setPiege(e.target.value)}/></label>
      </div>
    </form>
  );
};

const styles = {
  newsletterForm: {
    justifyContent: 'space-between',
    flexDirection: ['column', 'column', 'column', 'row'],
  },
  boxButton: {
    width: ['100%', '100%', '100%', '40%'],
    textAlign: ['center'],
    button: {
      backgroundColor: '#FFFFFF',
      color: '#2400FD',
      border: 'solid 2px #2400FD',
      boxShadow: '0px 3px 0px 0px #2400FD',
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },
  feedbackMessage: {
    mb: 3,
    p: 2,
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#f0f5ff',
    fontSize: '16px',
  },
  successMessage: {
    mb: 3,
    p: 2,
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#f0f9f0',
    borderLeft: '4px solid #4CAF50',
    fontSize: '16px',
  },
  errorMessage: {
    mb: 3,
    p: 2,
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#fff3f3',
    borderLeft: '4px solid #f44336',
    fontSize: '16px',
  },
};
