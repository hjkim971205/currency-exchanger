import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './weather-service.js';

// Business Logic

function getRate(from) {
  ExchangeService.getRate(from)
    .then(function(response) {
      if (response.result === "success") {
        printElements(response, from);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(response, from) {
  document.querySelector('#result').innerText = `The exchange rate for ${from} is ${response.conversion_rates}.`;
}

function printError(error, from) {
  document.querySelector('#result').innerText = `There was an error accessing the data for ${from}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const from = document.querySelector('#from').value;
  const to = document.querySelector('#to').value;
  const amount = document.querySelector("#amount").value;
  getRate(from, to, amount);
}

window.addEventListener("load", function() {
  document.querySelector('.container').addEventListener("submit", handleFormSubmission);
});