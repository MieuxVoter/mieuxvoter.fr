import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import IncidentBanner from './incident-banner';

export default function Layout({ children }) {

  return (
    <React.Fragment>

      <Header />

      <main id="content" sx={{ variant: 'layout.main', }} >
        {children}
      </main>

      <Footer />

      <IncidentBanner />

    </React.Fragment>
  );
}
