const $ = id => document.getElementById(id);

function formatDate(value){
  if(!value) return "—";
  const d = new Date(value + "T00:00:00");
  return d.toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"});
}

function generateCertificate(){
  $("previewName").textContent = $("participantName").value.trim() || "Participant Name";
  $("previewTitle").textContent = $("trainingTitle").value.trim() || "Training / Workshop Title";
  $("previewDate").textContent = formatDate($("trainingDate").value);
  $("previewHours").textContent = $("trainingHours").value || "—";
  $("previewIssuedBy").textContent = $("issuedBy").value.trim() || "Institution";
  $("previewNo").textContent = $("certificateNo").value.trim() || "—";
}

$("generateBtn").addEventListener("click", generateCertificate);
$("printBtn").addEventListener("click", () => { generateCertificate(); window.print(); });
$("clearBtn").addEventListener("click", () => {
  document.querySelectorAll("input").forEach(i => i.value = "");
  generateCertificate();
});

generateCertificate();
