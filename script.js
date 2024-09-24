document.getElementById("calculateButton").onclick = function () {
  const principal = parseFloat(document.getElementById("input-amount").value);
  const annualInterestRate =
    parseFloat(document.getElementById("input-rate").value) / 100;
  const years = parseFloat(document.getElementById("input-term").value);
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked'
  ).value;

  let monthlyPayment, totalPayment;

  if (mortgageType === "repayment") {
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = years * 12;

    monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    totalPayment = monthlyPayment * numberOfPayments;
  } else {
    const monthlyInterestRate = annualInterestRate / 12;
    monthlyPayment = principal * monthlyInterestRate;
    totalPayment = monthlyPayment * years * 12;
  }

  document.getElementById(
    "result"
  ).innerText = `Monthly Payment: $${monthlyPayment.toFixed(
    2
  )}\nTotal Payment: $${totalPayment.toFixed(2)}`;

  document.getElementById("results1").style.display = "none";
  document.getElementById("results2").style.display = "block";
};
