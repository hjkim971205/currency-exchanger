import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './weather-service.js';

// Business Logic

function getRate(from, to) {
  ExchangeService.getRate(from, to)
    .then(function(response) {
      if (response.result === "success") {
        console.log(response.conversion_rate);
        printElements(response, from, to);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(response, from, to) {
  document.querySelector('#result').innerText = `The exchange rate for ${from} to ${to} is ${response.conversion_rate}.`;
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