import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './weather-service.js';

// Business Logic

function getRate(currency) {
  ExchangeService.getRate(currency)
    .then(function(response) {
      if (response.main) {
        printElements(response, currency);
      } else {
        printError(response, currency);
      }
    });
}

// UI Logic

function printElements(response, currency) {
  document.querySelector('#showResponse').innerText = `The exchange rate for ${currency} is ${response.conversion_rates}%.`;
}

function printError(error, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for ${currency}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getRate(currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});