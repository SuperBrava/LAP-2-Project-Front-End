const hostAndPort = 'https://lap-2-project-backend.herokuapp.com/'; // This is for production

//JSON GET User Data
function fetchData() {
     fetch('https://lap-2-project-backend.herokuapp.com/api/habits')
    .then(response => response.json())
    .then(data => {getHabits(data)})
};

fetchData()

// LOGGED IN USER ID --------------------------------- //
let userID = 2;

// LOGGED IN USER ID --------------------------------- //
function getHabits(data) {
    if (data[userID].habit_freq_type === "daily"){
        console.log(data[userID]);   //  -----------------------DAILY HABITS -------------------------------//
        console.log(data[userID].habit); 
        console.log(data[userID].habit_freq_type); 
        console.log(data[userID].habit_frequency);
        console.log(data[userID].habit_aim_total);  

            // print info in html
            const habitRow = document.querySelector(".habits-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            
            habitItem.textContent = `${data[userID].habit} (${data[userID].habit_frequency}/${data[userID].habit_aim_total})`;   
            habitButton.textContent = "Done!";
            //APPLY STYLES
            habitItem.classList.add("habits-daily-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");

            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton);
            const habitButtonListener = document.querySelector(".completeHabit");
            habitButtonX(habitButtonListener);

    } else if  (data[userID].habit_freq_type == "weekly") {
        console.log(data[userID]);    //  -----------------------WEEKLY HABITS -------------------------------//
        console.log(data[userID].habit); 
        console.log(data[userID].habit_freq_type); 
        console.log(data[userID].habit_frequency);
        console.log(data[userID].habit_aim_total);  
    
            // print info in html
            const habitRow = document.querySelector(".habits-weekly-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            
            habitItem.textContent = `${data[userID].habit} (${data[userID].habit_frequency}/${data[userID].habit_aim_total})`;   
            habitButton.textContent = "Done!";
            //APPLY STYLES
            habitItem.classList.add("habits-weekly-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");
    
            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton);

            const habitButtonListener = document.querySelector(".completeHabit");
            habitButtonX(habitButtonListener);
    } else {
        console.log(data[userID]);  //  -----------------------MONTHLY HABITS -------------------------------//
        console.log(data[userID].habit); 
        console.log(data[userID].habit_freq_type); 
        console.log(data[userID].habit_frequency);
        console.log(data[userID].habit_aim_total);  
    
            // print info in html
            const habitRow = document.querySelector(".habits-monthly-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            
            
            habitItem.textContent = `${data[userID].habit} (${data[userID].habit_frequency}/${data[userID].habit_aim_total})`; 
            habitButton.textContent = "Done!";
             //APPLY STYLES
            habitItem.classList.add("habits-monthly-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");
    
            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton); 
            
            const habitButtonListener = document.querySelector(".completeHabit");
            habitButtonX(habitButtonListener);
};};
    
// // BUTTON FUNCTION TO ADD COMPLETED HABIT
// const habitButton = document.querySelector(".completeHabit");
function habitButtonX(habitButton) {
    habitButton.addEventListener("click", e => console.log("CLICK"));
    habitFrequencyPlusOne();
}; 

//POST REQUEST FOR +1 FOR COMPLETED HABIT
async function habitFrequencyPlusOne(){
    console.log('Plus one to habit frequency')
        const data = 
            data[userID].habit_frequency++;  //SELECTING USER HABIT TO INCREMENT PLUS ONE     
        try {
            const options = {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
            console.log(options); 
            const response = await fetch('https://lap-2-project-backend.herokuapp.com/api/habits', options);
            // const { response, err } = await response.json();  
            if(err) {
                throw Error(err)
            } else {
                console.log("SUCCESS");  
            }
        } catch (err) {
            console.warn(err);
        }
    }


// fetch(`${hostAndPort}/api/habits/`)
//      .then(data => {
//      return data.json();
//      })
//      .then(post => {
//      console.log(hours_per_day);
//      });
// creates a html elements and populates innertext with post data

// function getUserData(post){
//     const userData = ;
//     const userHabit = ;
//     let habitFreq = ;
//     let habitProgress = ;

//     habitContainer
// }


// function postInstance(post){
//     const postContainer = document.createElement('div');
//     postContainer.className = "mx-auto mb-5 mt-5 col-lg-7 col-md-8 col-sm-10 post"
//     postContainer.dataset.postid = post["post-id"];
    
//     const title = document.createElement('h4');
//     title.className = "secondh4"
//     title.innerText = "Windoge XP";
//     title.innerText = '> ' + post["post-topic"] + ' > ' + post["post-id"];
//     postContainer.append(title);

//     const posttitle = document.createElement('h2');
//     posttitle.innerText = post["post-title"];
//     postContainer.append(posttitle);

//     const postText = document.createElement('div');
//     postText.contentEditable = "true";
//     postText.className = "out";
    
//     const textSpan = document.createElement('span');
//     textSpan.className = "span1"
//     textSpan.innerText = '> ' + post["post-body"];

//     postText.append(textSpan);
//     postContainer.append(postText);
// }   