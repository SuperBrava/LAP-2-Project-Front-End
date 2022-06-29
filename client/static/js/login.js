const form = document.getElementById('loginForm');

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

form.addEventListener('submit', loginUser);

async function loginUser(e){
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    console.log('user login', userEmail, userPassword);

    const data = {
        email: userEmail,
        password: userPassword
    }
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        console.log(options);
        const response = await fetch('https://lap-2-project-backend.herokuapp.com/api/login', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            console('success of some sort')
        }
    } catch (err) {
        console.warn(err);
    }
}