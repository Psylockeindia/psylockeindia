document.addEventListener("DOMContentLoaded", () => {

  // ===== SOLAR SUBSIDY CALCULATOR =====
  const systemSlider = document.getElementById("systemSize");
  const systemValue = document.getElementById("systemValue");
  const costValue = document.getElementById("costValue");
  const subsidyValue = document.getElementById("subsidyValue");

  // ===== ROI CALCULATOR =====
  const billSlider = document.getElementById("monthlyBill");
  const billValue = document.getElementById("billValue");
  const savingValue = document.getElementById("savingValue");
  const paybackValue = document.getElementById("paybackValue");

  function updateSolarCalc() {
    const size = parseInt(systemSlider.value);
    const cost = size * 60000;
    const subsidy = size <= 3 ? size * 24000 : 72000;

    systemValue.innerText = size + " kW";
    costValue.innerText = "₹" + cost.toLocaleString();
    subsidyValue.innerText = "₹" + subsidy.toLocaleString();
  }

  function updateROI() {
    const bill = parseInt(billSlider.value);
    const annualSaving = bill * 12 * 0.8;
    const investment = parseInt(costValue.innerText.replace(/₹|,/g, ""));
    const payback = (investment / annualSaving).toFixed(1);

    billValue.innerText = "₹" + bill;
    savingValue.innerText = "₹" + annualSaving.toLocaleString();
    paybackValue.innerText = payback + " years";
  }

  systemSlider.addEventListener("input", () => {
    updateSolarCalc();
    updateROI();
  });

  billSlider.addEventListener("input", updateROI);

  updateSolarCalc();
  updateROI();
  // ===== EMI CALCULATOR =====
const loanSlider = document.getElementById("loanAmount");
const rateSlider = document.getElementById("interestRate");
const tenureSlider = document.getElementById("loanTenure");

const loanValue = document.getElementById("loanValue");
const rateValue = document.getElementById("rateValue");
const tenureValue = document.getElementById("tenureValue");
const emiValue = document.getElementById("emiValue");

function calculateEMI() {
  const P = loanSlider.value;
  const r = rateSlider.value / 12 / 100;
  const n = tenureSlider.value * 12;

  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  loanValue.innerText = "₹" + Number(P).toLocaleString();
  rateValue.innerText = rateSlider.value + "%";
  tenureValue.innerText = tenureSlider.value + " Years";
  emiValue.innerText = "₹" + Math.round(emi).toLocaleString();
}

loanSlider.addEventListener("input", calculateEMI);
rateSlider.addEventListener("input", calculateEMI);
tenureSlider.addEventListener("input", calculateEMI);

calculateEMI();

});
