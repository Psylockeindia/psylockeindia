function sendWhatsAppLead(){
  const n=name.value,p=phone.value,c=city.value,l=load.value;
  if(!n||!p){alert("Enter name & phone");return}
  const m=`🔆 New Solar Lead 🔆%0AName:${n}%0APhone:${p}%0ACity:${c}%0ALoad:${l}kW`;
  window.open("https://wa.me/919115306777?text="+m,"_blank");
}

function calculateSolar(){
  const b=bill.value;
  if(!b){return}
  result.innerText="Estimated Annual Savings: ₹"+(b*12*0.9).toFixed(0);
}

window.onload=()=>setTimeout(()=>leadPopup.style.display="flex",3000);
function closePopup(){leadPopup.style.display="none"}
