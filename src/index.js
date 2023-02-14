import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './weather-service.js';

// Business Logic

function getRate(from, to, amount) {
  //console.log("getRate called with", from, to, amount);
  ExchangeService.getRate(from, to, amount)
    .then(function(response) {
      if (response.conversion_result) {
        printElements(response);
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
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  const convertBtn = document.querySelector('#convert');
  convertBtn.addEventListener("click", handleFormSubmission);
});