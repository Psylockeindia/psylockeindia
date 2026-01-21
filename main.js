/* =====================================
   GLOBAL HELPERS
===================================== */
function openPopup() {
  document.getElementById("leadPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("leadPopup").style.display = "none";
}

/* =====================================
   AUTO POPUP (AFTER 4 SECONDS)
===================================== */
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.getElementById("leadPopup");
    if (popup) popup.style.display = "flex";
  }, 4000);
});

/* =====================================
   WHATSAPP LEAD SUBMISSION
===================================== */
function sendWhatsAppLead() {
  const name =
    document.getElementById("name")?.value || "Not Provided";
  const phone =
    document.getElementById("phone")?.value || "Not Provided";
  const city =
    document.getElementById("city")?.value || "Not Provided";
  const load =
    document.getElementById("load")?.value || "Not Provided";

  const message = encodeURIComponent(
    `New Solar Enquiry 🚀

Name: ${name}
Phone: ${phone}
City / Pin: ${city}
Connected Load: ${load} kW

Requesting free site visit & subsidy details.`
  );

  window.open(
    `https://wa.me/919115306777?text=${message}`,
    "_blank"
  );

  closePopup();
}

/* =============================
   POPUP CONTROL
   ============================= */
function openPopup() {
  document.getElementById("leadPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("leadPopup").style.display = "none";
}

setTimeout(() => {
  const popup = document.getElementById("leadPopup");
  if (popup) popup.style.display = "flex";
}, 4000);

/* =============================
   WHATSAPP LEAD FORM
   ============================= */
function sendWhatsAppLead(e) {
  e.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const city = document.getElementById("city")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const load = document.getElementById("load")?.value || "";

  const msg = encodeURIComponent(
    `New Solar Enquiry 🔆
Name: ${name}
Phone: ${phone}
City: ${city}
Email: ${email}
Load: ${load} kW`
  );

  window.open(`https://wa.me/919115306777?text=${msg}`, "_blank");
  closePopup();
}

/* =============================
   SUBSIDY CALCULATOR
   ============================= */
const systemSize = document.getElementById("systemSize");
if (systemSize) {
  systemSize.oninput = function () {
    const kw = Number(this.value);
    const cost = kw * 60000;
    let subsidy = 0;

    if (kw <= 3) subsidy = cost * 0.4;
    else subsidy = (3 * 60000 * 0.4) + ((kw - 3) * 60000 * 0.2);

    document.getElementById("systemValue").innerText = `${kw} kW`;
    document.getElementById("costValue").innerText = `₹${cost.toLocaleString()}`;
    document.getElementById("subsidyValue").innerText = `₹${Math.round(subsidy).toLocaleString()}`;
  };
}

/* =============================
   ROI CALCULATOR
   ============================= */
const billInput = document.getElementById("monthlyBill");
if (billInput) {
  billInput.oninput = function () {
    const bill = Number(this.value);
    const saving = bill * 12 * 0.8;
    const payback = (300000 / saving).toFixed(1);

    document.getElementById("billValue").innerText = `₹${bill}`;
    document.getElementById("savingValue").innerText = `₹${saving.toLocaleString()}`;
    document.getElementById("paybackValue").innerText = `${payback} years`;
  };
}

/* =============================
   EMI CALCULATOR
   ============================= */
function calculateEMI() {
  const amount = Number(document.getElementById("loanAmount").value);
  const years = Number(document.getElementById("loanTenure").value);
  const rate = 0.09 / 12;
  const months = years * 12;

  const emi = (amount * rate * Math.pow(1 + rate, months)) /
              (Math.pow(1 + rate, months) - 1);

  document.getElementById("emiValue").innerText = `₹${Math.round(emi).toLocaleString()}`;
}

["loanAmount", "loanTenure"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.oninput = calculateEMI;
});

/* =============================
   SCROLL ANIMATION
   ============================= */
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-up, .zoom-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
});

/* =====================================
   ROI & PAYBACK CALCULATOR
===================================== */
const billSlider = document.getElementById("monthlyBill");
if (billSlider) {
  const billValue = document.getElementById("billValue");
  const savingValue = document.getElementById("savingValue");
  const paybackValue = document.getElementById("paybackValue");

  billSlider.addEventListener("input", () => {
    const bill = Number(billSlider.value);
    billValue.innerText = `₹${bill}`;

    const annualSaving = bill * 12 * 0.8;
    const estimatedSystemCost = 300000;

    const paybackYears = (
      estimatedSystemCost / annualSaving
    ).toFixed(1);

    savingValue.innerText = `₹${annualSaving.toLocaleString()}`;
    paybackValue.innerText = `${paybackYears} years`;
  });
}

/* =====================================
   SAFE CLICK HANDLING (NO ERRORS)
===================================== */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-overlay")) {
    closePopup();
  }
   /* =========================
   SCROLL REVEAL EFFECT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up, .zoom-in");

  const revealOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

});
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("loading", "lazy");
});


