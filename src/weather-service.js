export default class ExchangeService {
  static getRate(from) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${from}/`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(errorMessage) {
        return errorMessage;
      });
  }
}