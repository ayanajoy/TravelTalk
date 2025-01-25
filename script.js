const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.querySelector('.form-container.sign-in form button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const email = document.querySelector('.form-container.sign-in input[placeholder="Email"]').value;
  const password = document.querySelector('.form-container.sign-in input[placeholder="Password"]').value;

  if (email && password) {
      // If all fields are filled, navigate to main page
      window.location.href = 'main.html';
  } else {
      alert('Please enter email and password');
  }
});