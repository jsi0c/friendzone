import { getApiConfig, validateApiConfig } from '../../src/config/api';

describe('API Configuration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('validateApiConfig', () => {
    it('should throw error if OPENAI_API_KEY is missing', () => {
      process.env.OPENAI_API_KEY = '';
      expect(() => validateApiConfig()).toThrow('OpenAI API key is required');
    });

    it('should not throw if all required config is present', () => {
      process.env.OPENAI_API_KEY = 'test-key';
      expect(() => validateApiConfig()).not.toThrow();
    });
  });

  describe('getApiConfig', () => {
    it('should return API configuration with defaults', () => {
      process.env.OPENAI_API_KEY = 'test-key';
      const config = getApiConfig();
      
      expect(config).toEqual({
        openAiApiKey: 'test-key',
        maxTokens: 150,
        temperature: 0.7,
        model: 'gpt-4',
      });
    });

    it('should override defaults with environment variables', () => {
      process.env.OPENAI_API_KEY = 'test-key';
      process.env.OPENAI_MAX_TOKENS = '200';
      process.env.OPENAI_TEMPERATURE = '0.9';
      process.env.OPENAI_MODEL = 'gpt-3.5-turbo';
      
      const config = getApiConfig();
      
      expect(config).toEqual({
        openAiApiKey: 'test-key',
        maxTokens: 200,
        temperature: 0.9,
        model: 'gpt-3.5-turbo',
      });
    });
  });
});