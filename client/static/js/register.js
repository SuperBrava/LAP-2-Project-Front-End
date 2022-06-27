const form = document.getElementById('registerForm');
form.addEventListener('submit', registerUser);

const togglePasswordButton = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePasswordButton.addEventListener('click', togglePassword);

//register user function
function registerUser(e){
    e.preventDefault();
    console.log('register function')
    //get values of form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    //validate form when user clicks submit button
    const validation = formValidaiton(username, password, confirmPassword);

    if(validation === true){
        console.log('form has been validated no issues found')
    }
    console.log('user', username, password, confirmPassword);
}
// Function to valide the form inputs - register form
function formValidaiton(username, password, confirmPassword){
    //Should create a function that checks if username exists (possibly) - backend
    document.getElementById('passwordMessage').textContent = '';
    document.getElementById('passwordConfirmMessage').textContent = '';
    if(password.length < 8){
        document.getElementById('passwordMessage').textContent = "Password length must be atleast 8 characters";
        return false;
    }
    if(containsNumber(password) != true){
        document.getElementById('passwordMessage').textContent = "Password must contain a number";
        return false;
    }
    if(containsSpecialChars(password) != true){
        document.getElementById('passwordMessage').textContent = "Password must contain special characters e.g. $ @ ! -";
        return false;
    }
    if(password != confirmPassword){
        document.getElementById('passwordConfirmMessage').textContent = "Passwords did not match";
        return false;
    }
    
    function containsNumber(str) {
        return /[0-9]/.test(str);
      }
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }
    return true;
}
//Function to toggle password - so user can the text of the password
function togglePassword(e){
    e.preventDefault();
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}