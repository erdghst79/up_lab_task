// import * as Sentry from '@sentry/react';
// import settings from 'config/settings';
// import initGA from './init-ga';
import DB from '../db';

export default function startup() {
  // TODO: Add init functions here
  // if (settings.isProduction) Sentry.init({ dsn: settings.sentryDsn });
  DB.init();
}
