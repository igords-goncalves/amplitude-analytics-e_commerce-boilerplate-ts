// Mock function to simulate feature flag variant assignment
export function getFeatureFlagVariant(experimentKey: string): 'control' | 'treatment' {
  const variants: Array<'control'|'treatment'> = ['control', 'treatment'];
  return variants[Math.floor(Math.random() * variants.length)];
}