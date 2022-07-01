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
    console.log(e.target)
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
        const response = await fetch('https://lap-2-project-backend.herokuapp.com/api/login', options);
        const responseData = await response.json();
        if(responseData.err) {throw Error(responseData.err) }
        else{login(responseData); }
    } catch (err) {
        console.warn(err);
    }
}

function login(data){
    // console.log('data', data)
    const payload = jwt_decode(data.token);
    // console.log('payload', payload)


    // console.log('token', data.token)
    // console.log('id', data.id);
    // console.log('username', payload.username)
    // console.log('email', payload.email)


    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('username', payload.username);
    localStorage.setItem('email', payload.email);

    window.location.replace("http://127.0.0.1:5500/client/main-page.html");
}