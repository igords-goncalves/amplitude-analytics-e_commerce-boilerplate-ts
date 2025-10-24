import { render } from '@testing-library/react';
import { ExperimentWrapper } from '../src/components/ExperimentWrapper';
import AmplitudeInitializer from '../src/services/AmplitudeInitializer';
import { EVENTS } from '../src/constants/events';

jest.spyOn(AmplitudeInitializer.getInstance(), 'trackEvent').mockImplementation();

test.skip('envia evento experiment_view ao montar', () => {
  render(<ExperimentWrapper />);
  expect(AmplitudeInitializer.getInstance().trackEvent).toHaveBeenCalledWith(
    EVENTS.EXPERIMENT_VIEW.name,
    expect.objectContaining({
      [EVENTS.EXPERIMENT_VIEW.props.EXPERIMENT_KEY]: 'new_checkout_button',
    })
  );
});
