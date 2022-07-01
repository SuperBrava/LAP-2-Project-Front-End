const form = document.getElementById('habitForm');
const logoutClick = document.getElementById('logout');

logoutClick.addEventListener('click', logout);
form.addEventListener('submit', addhabit);



async function addhabit(e){
    e.preventDefault();

    const habit = e.target.habit.value;
    const habitType = e.target.type.value;
    const frequency = e.target.frequency.value;
    const id = localStorage.getItem('id');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log('adding new habit')
    console.log('habit', habit, habitType, frequency);
    const data = {
        habit_freq_type: habitType,
        habit: habit,
        habit_frequency: 0,
        habit_aim_total: frequency,
        date: date,
        user_id: id
    }

    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        console.log(options);
        const response = await fetch('https://lap-2-project-backend.herokuapp.com/api/habits', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            off();
            window.location.reload();
            showToast();
        }
    } catch (err) {
        console.warn(err);
    }
}

function showToast() {
    console.log('snackbar showing...')
    var toast = document.getElementById("snackbar");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}
function off() {
    document.getElementById("overlay").style.display = "none";
  }