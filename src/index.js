import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeService.js';

// Business Logic

function getRate(from, to, amount) {
  ExchangeService.getRate(from, to, amount)
    .then(function(response) {
      if (response.result === "success") {
        console.log(response.conversion_rate);
        printElements(response, from, to, amount);
      } else {
        printError();
      }
    });
}

// UI Logic

function printElements(response, from, to, amount) {
  document.querySelector('#result').innerText = `The exchange rate for ${from} to ${to} is 1:${response.conversion_rate} and the conversion for ${amount}${from} is ${response.conversion_result}${to}`;
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