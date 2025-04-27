async function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const users = await response.json();
  
      if (users.length > 0) {
        localStorage.setItem("memberName", users[0].fullName);
        alert('Login successful!');
        window.location.href = 'index.html';
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  