import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Message } from '../common/interfaces';

class ApiClient {
  private apiInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.apiInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async sendMessage(message: Message): Promise<AxiosResponse> {
    try {
      const response = await this.apiInstance.post('/', message);
      return response;
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      throw error;
    }
  }
}

export default ApiClient;