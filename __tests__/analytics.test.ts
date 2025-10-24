import AmplitudeInitializer from '../src/services/AmplitudeInitializer';

// Mock do módulo AmplitudeInitializer
jest.mock('../src/services/AmplitudeInitializer', () => {
  return {
    __esModule: true,
    default: {
      getInstance: jest.fn(() => ({
        trackEvent: jest.fn(),
      })),
    },
  };
});

// Mock do amplitude
jest.mock('@amplitude/analytics-browser');

describe('Amplitude Tracking', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('envia evento corretamente', () => {
    const amplitudeInitializer = AmplitudeInitializer.getInstance();

    amplitudeInitializer.trackEvent('test_event', { key: 'value' });

    expect(amplitudeInitializer.trackEvent).toHaveBeenCalledWith('test_event', { key: 'value' });
  });
});
