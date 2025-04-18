import { Configuration, OpenAIApi } from 'openai';
import { getApiConfig } from '../config/api';

interface OpenAIConfig {
  maxTokens: number;
  temperature: number;
  model: string;
}

export class OpenAIService {
  private openai: OpenAIApi;
  private config: OpenAIConfig;

  constructor() {
    const apiConfig = getApiConfig();
    const configuration = new Configuration({
      apiKey: apiConfig.openAiApiKey,
    });

    this.openai = new OpenAIApi(configuration);
    this.config = {
      maxTokens: apiConfig.maxTokens,
      temperature: apiConfig.temperature,
      model: apiConfig.model,
    };
  }

  /**
   * Get the current OpenAI configuration
   * @returns {OpenAIConfig} The current configuration
   */
  getConfig(): OpenAIConfig {
    return { ...this.config };
  }

  /**
   * Generate a response using OpenAI API
   * @param {string} message - The input message
   * @returns {Promise<string>} The generated response
   * @throws {Error} If message is empty or API call fails
   */
  async generateResponse(message: string): Promise<string> {
    if (!message) {
      throw new Error('Message is required');
    }

    try {
      const response = await this.openai.createChatCompletion({
        model: this.config.model,
        messages: [{ role: 'user', content: message }],
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
      });

      if (!response.data.choices[0]?.message?.content) {
        throw new Error('No response generated');
      }

      return response.data.choices[0].message.content;
    } catch (error: any) {
      if (error?.response?.status === 401) {
        throw new Error('Invalid API key');
      }
      throw error;
    }
  }
}