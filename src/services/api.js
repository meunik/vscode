const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:9101/api';

class ApiService {
  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar ${endpoint}:`, error);
      throw error;
    }
  }

  async getCurriculo() {
    return this.request('/curriculo');
  }

  async getServers() {
    return this.request('/servers');
  }

  async getSetup() {
    return this.request('/setup');
  }
}

export default new ApiService();
