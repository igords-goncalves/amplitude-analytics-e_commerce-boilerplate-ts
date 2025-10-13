import * as amplitude from '@amplitude/analytics-browser';

export default class AmplitudeInitializer {
    private initialized: boolean;
    
    constructor() {
        this.initialized = false;
    }
    
    async init() {
        const apiKey = process.env.AMPLITUDE_API_KEY || '';

        if (!apiKey) {
            console.error('Amplitude API key is missing. Please set AMPLITUDE_API_KEY in your environment variables.');
            return;
        }

        if (this.initialized || typeof window === 'undefined') {
            console.warn('Amplitude already initialized or not in a client environment.');
            return;
        } 

        try {
            await amplitude.init(apiKey, {
                autocapture: {
                    pageViews: false,
                },
            }).promise;

            console.info('Amplitude initialized');
            this.initialized = true;
        } catch (error) {
            console.error('Failed to initialize Amplitude:', error);
            return;
        }
    }

    isClient() {
        return typeof window !== 'undefined';
    }

    async trackEvent(eventName: string, eventProps: Record<string, any> = {}) {
        if (!this.initialized) {
            console.warn('Amplitude not initialized. Call initAmplitude() before tracking events.');
            return;
        }
        amplitude.track(eventName, eventProps);
    }
}

export { amplitude };