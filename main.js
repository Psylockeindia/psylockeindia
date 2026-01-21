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

/* =====================================
   SUBSIDY CALCULATOR (UPNEDA)
===================================== */
const systemSlider = document.getElementById("systemSize");
if (systemSlider) {
  const systemValue = document.getElementById("systemValue");
  const costValue = document.getElementById("costValue");
  const subsidyValue = document.getElementById("subsidyValue");

  systemSlider.addEventListener("input", () => {
    const kw = Number(systemSlider.value);
    systemValue.innerText = `${kw} kW`;

    const cost = kw * 60000;
    let subsidy = 0;

    if (kw <= 3) {
      subsidy = cost * 0.4;
    } else {
      subsidy = (3 * 60000 * 0.4) + ((kw - 3) * 60000 * 0.2);
    }

    costValue.innerText = `₹${cost.toLocaleString()}`;
    subsidyValue.innerText = `₹${Math.round(subsidy).toLocaleString()}`;
  });
}

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

