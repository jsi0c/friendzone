interface ApiConfig {
  openAiApiKey: string;
  maxTokens: number;
  temperature: number;
  model: string;
}

/**
 * Validates the required API configuration
 * @throws {Error} If required configuration is missing
 */
export const validateApiConfig = (): void => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is required');
  }
};

/**
 * Returns the API configuration with defaults
 * @returns {ApiConfig} The API configuration object
 */
export const getApiConfig = (): ApiConfig => {
  validateApiConfig();

  return {
    openAiApiKey: process.env.OPENAI_API_KEY!,
    maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '150', 10),
    temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
    model: process.env.OPENAI_MODEL || 'gpt-4',
  };
};