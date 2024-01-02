const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

setTimeout(function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupSuccess').style.display = 'block';
}, 2000); 
