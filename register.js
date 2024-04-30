document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    
  
    var userData = {

      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      email: email,
      username: username,
      password: password
    };
    
   
    localStorage.setItem('userData', JSON.stringify(userData));
    
  
    window.location.href = 'dashboard.html';
  });
  