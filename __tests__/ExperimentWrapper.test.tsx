import React from 'react';
import { render } from '@testing-library/react';
import * as analytics from '../src/amplitude';
import { ExperimentWrapper } from '../src/components/ExperimentWrapper';
import { EVENTS } from '../src/events';

jest.spyOn(analytics, 'trackEvent').mockImplementation(() => {});

test('envia evento experiment_view ao montar', () => {
  render(<ExperimentWrapper />);
  expect(analytics.trackEvent).toHaveBeenCalledWith(
    EVENTS.EXPERIMENT_VIEW.name,
    expect.objectContaining({
      [EVENTS.EXPERIMENT_VIEW.props.EXPERIMENT_KEY]: 'new_checkout_button',
    })
  );
});
