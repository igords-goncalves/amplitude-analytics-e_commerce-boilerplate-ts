import * as amplitude from '@amplitude/analytics-browser';

export default class AmplitudeInitializer {
    private initialized: boolean;
    private apiKey?: string;
    
    constructor() {
        this.initialized = false;
        this.apiKey = process.env.AMPLITUDE_API_KEY;
    }

    async init() {
        const apiKey = this.apiKey;

        if (!apiKey) {
            console.error('Amplitude API key is missing. Please set AMPLITUDE_API_KEY in your environment variables.');
            return;
        }

        if (this.initialized || typeof window === 'undefined') {
            console.warn('Amplitude already initialized or not in a client environment.');
            return;
        } 

        try {
            /**
             * Retorna um objeto com a propriedade "promise",
             * que já resolve quando a inicialização estiver completa
             */
            await amplitude.init(apiKey, {
                autocapture: {
                    pageViews: false,
                },
            }).promise;

            this.initialized = true;
            console.info('Amplitude initialized');
        } catch (error) {
            console.error('Failed to initialize Amplitude:', error);
            throw new Error('Amplitude initialization failed: ' + (error as Error).message);
        }
    }

    isClient() {
        return typeof window !== 'undefined';
    }

    trackEvent(eventName: string, eventProps: Record<string, any> = {}) {
        if (!this.initialized) {
            console.warn('Amplitude not initialized. Call initAmplitude() before tracking events.');
            return;
        }
        amplitude.track(eventName, eventProps);
    }
}

export { amplitude };