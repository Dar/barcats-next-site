import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''; // Your GA Measurement ID

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};
