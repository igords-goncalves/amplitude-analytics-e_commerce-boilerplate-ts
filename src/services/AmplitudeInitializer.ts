import * as amplitude from "@amplitude/analytics-browser";

export default class AmplitudeInitializer {
    private static instance: AmplitudeInitializer;
    private initialized: boolean;
    private apiKey?: string;

    private constructor() {
        this.initialized = false;
        this.apiKey = process.env.AMPLITUDE_API_KEY;
    }

    /**
     * Cria uma nova instância se ainda não existir uma. Isso garante que apenas
     * uma instância do Amplitude seja usada em toda a aplicação, ou seja, tudo vai passar 
     * por dentro dessa instância.
     * 
     * @returns {AmplitudeInitializer} A instância singleton
     */
    static getInstance(): AmplitudeInitializer {
        if (!AmplitudeInitializer.instance) {
            AmplitudeInitializer.instance = new AmplitudeInitializer();
        }
        return AmplitudeInitializer.instance;
    }

    private isClientEnvironment(): boolean {
        return typeof window !== "undefined" && typeof document !== "undefined";
    }

    async init() {
        if (this.initialized) {
            return;
        }

        if (!this.apiKey) {
            console.error(
                "Amplitude API key is missing. Please set AMPLITUDE_API_KEY in your environment variables."
            );
            return;
        }

        // Adiciona robustez para verificação de ambientes
        if (!this.isClientEnvironment()) {
            console.warn("Amplitude Browser SDK requires a browser environment. For server-side tracking, use @amplitude/analytics-node instead.");
            return;
        }
        
        /**
         * Retorna um objeto com a propriedade "promise",
         * que já é resolvido quando a inicialização estiver completa
         */
        try {
            await amplitude.init(this.apiKey, {
                autocapture: {
                    pageViews: false,
                },
            }).promise;

            this.initialized = true;
            console.info("Amplitude initialized");
        } catch (error) {
            console.error("Failed to initialize Amplitude:", error);
            throw new Error(
                "Amplitude initialization failed: " + (error as Error).message
            );
        }
    }

    async trackEvent(eventName: string, eventProps: Record<string, any> = {}) {
        if (!this.initialized) {
            console.warn("Amplitude not initialized. Unable to track event.");
            return;
        }
        amplitude.track(eventName, eventProps);
    }
}
