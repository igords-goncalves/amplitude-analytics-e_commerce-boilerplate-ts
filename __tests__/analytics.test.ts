import { trackEvent } from '../src/amplitude';
import * as amplitude from '@amplitude/analytics-browser';

jest.mock('amplitude', () => ({
  getInstance: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

describe('Amplitude Tracking', () => {
  it('envia evento corretamente', () => {
    const mockLog = jest.fn();
    (amplitude.init as jest.Mock).mockReturnValue({ logEvent: mockLog });

    trackEvent('test_event', { key: 'value' });

    expect(mockLog).toHaveBeenCalledWith('test_event', { key: 'value' });
  });
});
