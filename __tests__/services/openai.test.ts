import { OpenAIService } from '../../src/services/openai';
import { getApiConfig } from '../../src/config/api';

jest.mock('../../src/config/api');

describe('OpenAIService', () => {
  let service: OpenAIService;
  
  beforeEach(() => {
    (getApiConfig as jest.Mock).mockReturnValue({
      openAiApiKey: 'test-key',
      maxTokens: 150,
      temperature: 0.7,
      model: 'gpt-4',
    });
    
    service = new OpenAIService();
  });

  describe('initialization', () => {
    it('should create instance with API key', () => {
      expect(service).toBeTruthy();
      expect(getApiConfig).toHaveBeenCalled();
    });

    it('should use configuration from api config', () => {
      expect(service.getConfig()).toEqual({
        maxTokens: 150,
        temperature: 0.7,
        model: 'gpt-4',
      });
    });
  });

  describe('generateResponse', () => {
    it('should validate input message', async () => {
      await expect(service.generateResponse('')).rejects.toThrow('Message is required');
    });

    it('should return error for invalid API key', async () => {
      (getApiConfig as jest.Mock).mockReturnValue({
        openAiApiKey: 'invalid-key',
        maxTokens: 150,
        temperature: 0.7,
        model: 'gpt-4',
      });

      service = new OpenAIService();
      await expect(service.generateResponse('test')).rejects.toThrow('Invalid API key');
    });
  });
});