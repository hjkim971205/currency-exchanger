export default class ExchangeService {
  static getRate(from, to) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}`)
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