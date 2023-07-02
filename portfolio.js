const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});


function sendemail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mreyes062923@gmail.com",
    Password : "43625AD52A5723A40A706FEE5EA7D6797458",
    To : 'manuelreyes1241@outlook.com',
    From : "mreyes062923@gmail.com",
    Subject : "Professional Inquiry",
    Body : "Name: " + document.getElementById("name").value + "\n"
          + "<br> Email: " + document.getElementById("email").value + "\n"
          + "<br> Phone Number: " + document.getElementById("phone").value + "\n"
          + "\n"
          + "\n"
          + "<br> Message: " + document.getElementById("message").value + "\n"
  }).then(
    message => alert("Message Sent Succesfully")
  );
}

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }
  
  if (email === "") {
    alert("Please enter your email address.");
    emailInput.focus();
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }
  
  if (phone === "") {
    alert("Please enter your phone number.");
    phoneInput.focus();
    return false;
  }
  
  if (message === "") {
    alert("Please enter your message.");
    messageInput.focus();
    return false;
  }
  
  // If all validations pass, the form is considered valid
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
