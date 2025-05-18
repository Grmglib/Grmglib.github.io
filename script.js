document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (password !== 'securepassword') {
      document.getElementById('error-message').innerHTML = 
        `Login failed for user: <strong>${username}</strong>. Please try again.`;
    } else {
      alert('Login successful!');
    }
  });
