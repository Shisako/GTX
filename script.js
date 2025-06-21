function openModal() {
  document.getElementById('contact-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('contact-modal').style.display = 'none';
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const discord = document.getElementById("discord").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && discord && message) {
    alert("Message envoyé ! Merci pour votre intérêt.");
    closeModal();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}