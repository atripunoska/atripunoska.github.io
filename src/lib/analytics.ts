import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-W7Y6FG7HDE';

let initialized = false;

export function initAnalytics() {
  if (!import.meta.env.PROD) {
    console.info('[analytics] skipped — not a production build');
    return;
  }
  if (initialized) return;
  ReactGA.initialize(GA_MEASUREMENT_ID);
  initialized = true;
}

export function trackPageview(path: string = window.location.pathname) {
  if (!import.meta.env.PROD) return;
  ReactGA.send({ hitType: 'pageview', page: path });
}

// Ready to use later for resume downloads, project expands, contact
// form submits, etc. — e.g. trackEvent('resume', 'download')
export function trackEvent(category: string, action: string, label?: string) {
  if (!import.meta.env.PROD) return;
  ReactGA.event({ category, action, label });
}
