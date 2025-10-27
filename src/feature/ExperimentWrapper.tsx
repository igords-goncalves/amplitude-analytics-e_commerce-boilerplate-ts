import { useEffect, useState } from 'react';
import { EVENTS } from '../constants/events';
import AmplitudeInitializer from '../services/AmplitudeInitializer';
import { Button } from '../components/_commons/Button';

// Mock function to simulate feature flag variant assignment
function getFeatureFlagVariant(flagKey: string): 'control' | 'variant' {
  const variants: Array<'control'|'variant'> = ['control', 'variant'];
  return variants[Math.floor(Math.random() * variants.length)];
}

type ExperimentWrapperProps = {
  children: React.ReactNode;
};

export function ExperimentWrapper({ children }: ExperimentWrapperProps) {
  const amplitudeInitializer = AmplitudeInitializer.getInstance();
  
  const [variant, setVariant] = useState<'control'|'variant' | null>(null);
  // Experiment Flag vindo do amplitude
  const experimentKey = 'new_checkout_button';

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
      {variant === 'variant' ? (
        <Button data-testid="checkout-btn">Comprar Agora (Novo)</Button>
      ) : (
        <Button data-testid="checkout-btn">Comprar</Button>
      )}
    </div>
  );
}
