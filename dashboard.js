var container = document.getElementById("container");
var display = document.getElementById("display-data");
var userDataBody = document.getElementById("userDataBody")

// var savedUsers = JSON.parse(localStorage.getItem('userData'));


const btn = ()=>{
    display.addEventListener("click",()=>{
        container.classList.toggle("hidden")
    })
}

userDataBody.innerHTML = `
<td>${}</td>
<td>molepo</td>
<td>1999/09/20</td>
<td>giftkgamaki@gmail.com</td>
<td>molepo21</td>
<td>12345</td>



`
