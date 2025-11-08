import { useEffect, useState } from "react";
import { EVENTS } from "../constants/events";
import AmplitudeInitializer from "../services/AmplitudeInitializer";
import { Button } from "../components/_commons/Button";
import { getFeatureFlagVariant } from "../utils/getFeatureFlagVariante";
import { CornerDownRight } from "lucide-react";

type ExperimentWrapperProps = {
    children?: (variant: string) => React.ReactNode;
};

export function ExperimentWrapper({ children }: ExperimentWrapperProps) {
    const amplitudeInitializer = AmplitudeInitializer.getInstance();

    const [variant, setVariant] = useState<"control" | "treatment" | null>(
        null
    );

    // Experiment Flag vindo do amplitude
    const experimentKey = "new_checkout_button";

    useEffect(() => {
        const assignedVariant = getFeatureFlagVariant(experimentKey);
        setVariant(assignedVariant);

        amplitudeInitializer.trackEvent(EVENTS.EXPERIMENT_VIEW.name, {
            [EVENTS.EXPERIMENT_VIEW.props.EXPERIMENT_KEY]: experimentKey,
            [EVENTS.EXPERIMENT_VIEW.props.VARIANT]: assignedVariant,
        });
    }, []);

    if (!variant) return null;

    return (
        <div data-variant={variant}>
            {variant === "treatment" ? (
                <Button
                    className="px-4 text-[12px] font-medium rounded-lg bg-amber-700"
                    data-testid="checkout-btn"
                    rightIcon={<CornerDownRight size={18} />}
                >
                    Comprar Agora
                </Button>
            ) : (
                <Button
                    className="px-4 text-[12px] font-medium rounded-lg bg-amber-700"
                    data-testid="checkout-btn"
                    rightIcon={<CornerDownRight size={18} />}
                >
                    Comprar
                </Button>
            )}
        </div>
    );
}
