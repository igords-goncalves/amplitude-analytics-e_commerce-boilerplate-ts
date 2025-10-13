import { useEffect, useState } from 'react';
import { EVENTS } from '../events';
import AmplitudeInitializer, { amplitude } from '../amplitude';

function getFeatureFlagVariant(flagKey: string): 'control' | 'variant' {
  const variants: Array<'control'|'variant'> = ['control', 'variant'];
  return variants[Math.floor(Math.random() * variants.length)];
}

export function ExperimentWrapper() {
  const amplitudeInitializer = new AmplitudeInitializer();
  const [variant, setVariant] = useState<'control'|'variant' | null>(null);
  const experimentKey = 'new_checkout_button';

  useEffect(() => {
    const assignedVariant = getFeatureFlagVariant(experimentKey);
    setVariant(assignedVariant);

    amplitude.track(EVENTS.EXPERIMENT_VIEW.name, {
      [EVENTS.EXPERIMENT_VIEW.props.EXPERIMENT_KEY]: experimentKey,
      [EVENTS.EXPERIMENT_VIEW.props.VARIANT]: assignedVariant,
    });
  }, []);

  if (!variant) return null;

  return (
    <div data-variant={variant}>
      {variant === 'variant' ? (
        <button data-testid="checkout-btn">Comprar Agora (Novo)</button>
      ) : (
        <button data-testid="checkout-btn">Comprar</button>
      )}
    </div>
  );
}
