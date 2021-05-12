const BASE_URL = 'https://developer.ticketmaster.com/discovery/v2/events';
const API_KEY = 'Y7Q54DNo5Fc2RWQ0VYfv9OHSBr0MiT9B';

export default {
  async getEvents() {
    try {
      const response = await fetch(
        `${BASE_URL}.json?size=1&countryCode='UA'&apikey={apikey}`,
      );
      if (!response.ok) {
        throw response;
      }
      return response.json();
    } catch (error) {
      console.log(error, 'error');
    }
  },
};
