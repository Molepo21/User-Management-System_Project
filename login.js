document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    
    var savedUser = JSON.parse(localStorage.getItem('userData'));
    
   
    if (savedUser && savedUser.username === username && savedUser.password === password) {

  
      window.location.href = 'dashboard.html';
    } else {
     
        alert("Invalid username or password")
    }
  });
  