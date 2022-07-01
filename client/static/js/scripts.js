const hostAndPort = 'https://lap-2-project-backend.herokuapp.com/'; // This is for production
// LOGGED IN USER ID --------------------------------- //
let userID = localStorage.getItem("id");

//JSON GET User Data
function fetchData() {
     fetch(`https://lap-2-project-backend.herokuapp.com/api/users/${userID}`)
    .then(response => response.json())
    .then(data => {printHabits(data)})
};

fetchData()

// LOGGED IN USER ID --------------------------------- //
function printHabits(data) {
    let getHabits = data;
    
    // getHabits.forEach(element => console.log(element));
    getHabits.forEach(element => sortingFunction(element));
  
    function sortingFunction(sorting) {

        // console.log(sorting); 
        // console.log(sorting.habit); 
        // console.log(sorting.habit_frequency_type); 
        // console.log(sorting.habit_frequency);
        // console.log(sorting.habit_aim);
        // console.log(sorting.habit_id)

    if (sorting.habit_frequency_type == "Daily"){        
         //  -----------------------DAILY HABITS -------------------------------//
            // print info in html
            const habitRow = document.querySelector(".habits-daily-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            const habitSpacer = document.createElement("div")
            
            habitItem.textContent = `${sorting.habit} (${sorting.habit_frequency}/${sorting.habit_aim})`;   
            habitButton.textContent = "Done!";
            //APPLY STYLES
            habitItem.classList.add("habits-daily-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");

            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton);
            habitRow.appendChild(habitSpacer);

            console.log(sorting.habit_frequency);
            console.log(sorting.habit_frequency++);
            // console.log(sorting.habit_id);
            console.log(sorting);
     
     
            //BUTTON LISTENER
            const habitButtonListener = document.querySelector(".completeHabit");
                    
            habitButtonX(habitButtonListener);

            function habitButtonX(habitButton) {
                habitButton.addEventListener("click", e => {
                    console.log("CLICK");
                    habitFrequencyPlusOne();
            });

            // function habitFrequencyPlusOne(){
            //     let url = `https://lap-2-project-backend.herokuapp.com/api/habits/${sorting.habit_id}`;

            //     let plusOne = sorting.habit_frequency + 1;
            //     console.log(sorting);
            //     console.log(sorting.habit_frequency);
            //     console.log(plusOne);
              

            //     let dataToUpdate = {
            //         habit: sorting.habit,
            //         habit_freq_type: sorting.habit_frequency_type,
            //         habit_frequency: plusOne,
            //         habit_aim_total: sorting.habit_aim_total,
            //         date: sorting.date,
            //         user_id: sorting.userID
            //     }

            //     let options = {
            //         method: "PATCH",
            //         body: JSON.stringify(dataToUpdate)
            //     }
            //     fetch(url, options)
            //     .then(response => console.log(response.status))
            //     .catch(response => console.log("error"))
            // }
        }


    } else if  (sorting.habit_frequency_type == "Weekly") {
           //  -----------------------WEEKLY HABITS -------------------------------//
            
            // print info in html
            const habitRow = document.querySelector(".habits-weekly-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            const habitSpacer = document.createElement("div")
            let habitCounter = 0;

            habitItem.textContent = `${sorting.habit} (${habitCounter}/${sorting.habit_aim})`;  
            habitButton.textContent = "Done!";
            //APPLY STYLES
            habitItem.classList.add("habits-weekly-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");
            habitSpacer.classList.add("block");
    
            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton);
            habitRow.appendChild(habitSpacer);

            // console.log(sorting.habit_frequency);
            // console.log(sorting.habit_frequency++);
            // console.log(+sorting.habit_frequency);
            // console.log(sorting.habit_id)
            // console.log(sorting)

          //BUTTON LISTENER
            const habitButtonListener = document.querySelector(".completeHabit");
            
            habitButtonX(habitButtonListener);

            function habitButtonX() {
                habitButton.addEventListener("click", e => {
                    console.log(habitCounter);
                    console.log("CLICK");
                    habitCounter = habitCounter + 1;
                   return habitCounter;
            });

          
                // let url = `https://lap-2-project-backend.herokuapp.com/api/habits/${sorting.habit_id}`;
                // let plusOne = sorting.habit_frequency + 1;
                // console.log(sorting);
                // console.log(sorting.habit_frequency);
                // console.log(plusOne);

                // let dataToUpdate = {
                //     habit: sorting.habit,
                //     habit_freq_type: sorting.habit_frequency_type,
                //     habit_frequency: plusOne,
                //     habit_aim_total: sorting.habit_aim_total,
                //     date: sorting.date,
                //     user_id: sorting.userID
                // }

                // let options = {
                //     method: "PATCH",
                //     body: JSON.stringify(dataToUpdate)
                // }
                // fetch(url, options)
                // .then(response => console.log(response.status))
                // .catch(response => console.log("error"))
            }
    } else if  (sorting.habit_frequency_type == "Monthly") {
         //  -----------------------MONTHLY HABITS -------------------------------//
       
            // print info in html
            const habitRow = document.querySelector(".habits-monthly-row");
            const habitItem = document.createElement("div");
            const habitButton = document.createElement("button");
            const habitSpacer = document.createElement("div")
            
            habitItem.textContent = `${sorting.habit} (${sorting.habit_frequency}/${sorting.habit_aim})`;   
            habitButton.textContent = "Done!";
             //APPLY STYLES
            habitItem.classList.add("habits-monthly-row"); 
            habitButton.classList.add("btn"); 
            habitButton.classList.add("btn-outline-dark");
            habitButton.classList.add("completeHabit");
            habitSpacer.classList.add("block");
    
            habitRow.appendChild(habitItem);
            habitRow.appendChild(habitButton); 
            habitRow.appendChild(habitSpacer);
            
             //BUTTON LISTENER
             const habitButtonListener = document.querySelector(".completeHabit");
                    
             habitButtonX(habitButtonListener);
 
             function habitButtonX(habitButton) {
                 habitButton.addEventListener("click", e => {
                     console.log("CLICK");
                     habitFrequencyPlusOne();
             });
 
             function habitFrequencyPlusOne(){
            //      let url = `https://lap-2-project-backend.herokuapp.com/api/habits/${sorting.habit_id}`;
 
            //      let plusOne = sorting.habit_frequency + 1;
            //      console.log(sorting);
            //      console.log(sorting.habit_frequency_type);
            //      console.log(sorting.habit_frequency);
            //      console.log(plusOne);
            //      console.log(sorting.habit_aim)
            //      console.log(sorting.date)
 
            //      let dataToUpdate = {
            //         habit_freq_type: sorting.habit_frequency_type,                     
            //          habit: sorting.habit,
            //          habit_frequency: plusOne,
            //          habit_aim_total: sorting.habit_aim,
            //          date: sorting.date,
            //          user_id: userID
            //      }
                
            //      console.log(dataToUpdate);

            //      let options = {
            //          method: "PATCH",
            //          body: JSON.stringify(dataToUpdate)
            //      }
            //      fetch(url, options)
            //      .then(response => console.log(response.status))
            //      .catch(response => console.log("error"))
            //  }
        }
    };}
};



    
// // BUTTON FUNCTION TO ADD COMPLETED HABIT
// const habitButton = document.querySelector(".completeHabit");


// function habitFrequencyPlusOne(){  ///ACYNC AWAIT ISSUE?
//     let url = `https://lap-2-project-backend.herokuapp.com/api/users/${userID}`;
//     let dataToUpdate = {
       
//         user_id: 4,
//         id: 1,
//         habit_frequency: 5
//     }
//     let options = {
//         method: "PUT",
//         body: JSON.stringify(dataToUpdate)
//     }
//     fetch(url, options)
//     .then(response => console.log(response.status))
//     .catch(response => console.log(response.status))
// }

//POST REQUEST FOR +1 FOR COMPLETED HABIT
// async function habitFrequencyPlusOne(){
//     console.log('Plus one to habit frequency')
//         const updateData = 
//             data[userID].habit_frequency++;  //SELECTING USER HABIT TO INCREMENT PLUS ONE     
//         try {
//             let options = {
//                 method: 'PUT',
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(updateData)
//             }
//             console.log(options); 
//             const response = await fetch('https://lap-2-project-backend.herokuapp.com/api/habits', options);
//             // const { response, err } = await response.json();  
//             if(err) {
//                 throw Error(err)
//             } else {
//                 console.log("SUCCESS");  
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     }


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
}