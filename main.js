/* =========================
   WHATSAPP LEAD
========================= */
function sendWhatsAppLead(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const city = document.getElementById("city")?.value || "";
  const load = document.getElementById("load")?.value || "";

  const msg = encodeURIComponent(
    `New Solar Lead 🔆
Name: ${name}
Phone: ${phone}
City: ${city}
Load: ${load} kW`
  );

  window.open(`https://wa.me/919115306777?text=${msg}`, "_blank");
}

/* =========================
   POPUP
========================= */
function openPopup() {
  const p = document.getElementById("leadPopup");
  if (p) p.style.display = "flex";
}

function closePopup() {
  const p = document.getElementById("leadPopup");
  if (p) p.style.display = "none";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const p = document.getElementById("leadPopup");
    if (p) p.style.display = "flex";
  }, 3000);
});

/* =========================
   SUBSIDY CALCULATOR
========================= */
const system = document.getElementById("systemSize");
if (system) {
  system.oninput = () => {
    const kw = system.value;
    const cost = kw * 60000;
    let subsidy = kw <= 3 ? cost * 0.4 : (3 * 60000 * 0.4) + ((kw - 3) * 60000 * 0.2);

    document.getElementById("systemValue").innerText = kw + " kW";
    document.getElementById("costValue").innerText = "₹" + cost.toLocaleString();
    document.getElementById("subsidyValue").innerText = "₹" + Math.round(subsidy).toLocaleString();
  };
}

/* =========================
   ROI CALCULATOR
========================= */
const bill = document.getElementById("monthlyBill");
if (bill) {
  bill.oninput = () => {
    const b = bill.value;
    const yearly = b * 12 * 0.8;
    const payback = (300000 / yearly).toFixed(1);

    document.getElementById("billValue").innerText = "₹" + b;
    document.getElementById("savingValue").innerText = "₹" + yearly.toLocaleString();
    document.getElementById("paybackValue").innerText = payback + " years";
  };
}
