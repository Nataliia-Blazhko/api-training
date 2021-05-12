const BASE_URL = 'https://www.boredapi.com/api/activity';

export default {
  async getRandomActivity() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw response;
      }
      return response.json();
    } catch (error) {
      console.log(error, 'error');
    }
  },
};
