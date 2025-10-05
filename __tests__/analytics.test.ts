import { trackEvent } from '../src/analytics';
import amplitude from 'amplitude-js';

jest.mock('amplitude-js', () => ({
  getInstance: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

describe('Amplitude Tracking', () => {
  it('envia evento corretamente', () => {
    const mockLog = jest.fn();
    (amplitude.getInstance as jest.Mock).mockReturnValue({ logEvent: mockLog });

    trackEvent('test_event', { key: 'value' });

    expect(mockLog).toHaveBeenCalledWith('test_event', { key: 'value' });
  });
});
