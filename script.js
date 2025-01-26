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
document.querySelector('.form-container.sign-up form button').addEventListener('click', async function(event) {
    event.preventDefault();

    const name = document.querySelector('.form-container.sign-up input[placeholder="Name"]').value;
    const email = document.querySelector('.form-container.sign-up input[placeholder="Email"]').value;
    const password = document.querySelector('.form-container.sign-up input[placeholder="Password"]').value;

    if (name && email && password) {
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            if (response.ok) {
                alert('Signup successful! Please log in.');
                container.classList.remove("active"); // Switch to sign-in form
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
document.querySelector('.form-container.sign-in form button').addEventListener('click', async function(event) {
    event.preventDefault();

    const email = document.querySelector('.form-container.sign-in input[placeholder="Email"]').value;
    const password = document.querySelector('.form-container.sign-in input[placeholder="Password"]').value;

    if (email && password) {
        try {
            const response = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                alert('Login successful!');
                window.localStorage.setItem('token', data.token); // Store token in localStorage
                window.location.href = 'main.html'; // Navigate to main page
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    } else {
        alert('Please enter email and password.');
    }
});
