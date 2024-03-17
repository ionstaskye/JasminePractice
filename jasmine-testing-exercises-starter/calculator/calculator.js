window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years:10, rate:5}
  const amountvalue = document.getElementById("loan-amount")
  amountvalue.value = values.amount
  const yearsvalue = document.getElementById("loan-years");
  yearsvalue.value = values.years
  const ratevalue = document.getElementById("loan-rate");
  ratevalue.value =values.rate
  update()

  }


// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentloanvalues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentloanvalues))
  
} 

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyrate = (values.rate / 100)/12
  const months = (values.years *12)
  return (
    ((values.amount*monthlyrate)/1-Math.pow((1-monthlyrate), -months)).toFixed(2)
  )
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlypayment = document.getElementById("monthly-payment")
  monthlypayment.innerText = "$"+monthly
}
