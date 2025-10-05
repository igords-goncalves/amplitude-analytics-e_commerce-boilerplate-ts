import amplitude from 'amplitude-js';

export const initAmplitude = () => {
  // Replace with your real key in .env or runtime config
  amplitude.getInstance().init('AMPLITUDE_API_KEY');
};

export const trackEvent = (eventName: string, eventProps: Record<string, any> = {}) => {
  amplitude.getInstance().logEvent(eventName, eventProps);
};
