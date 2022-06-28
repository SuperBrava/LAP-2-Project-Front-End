const hostAndPort = 'https://lap-2-project-backend.herokuapp.com/'; // This is for production

//JSON GET User Data
function fetchData() {
    fetch('https://lap-2-project-backend.herokuapp.com/api/habits')
    .then(response => response.json())
    .then(data => {getHabits(data)});
};

fetchData()

function getHabits(data) {
    console.log(data);
    data.forEach(element => {
         console.log(element);

    })
};






//  fetch(`${hostAndPort}/api/habits/`,  {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.parse(data), 
//         })
//     .then(() => {
//        getUserData();
//     })
//     .catch((error) => {
//         console.error('Error: Get Request Unsuccessful', error);
//      });

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