
const togglePasswordButton = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePasswordButton.addEventListener('click', togglePassword);



//Function to toggle password - so user can the text of the password
function togglePassword(e){
    e.preventDefault();
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}