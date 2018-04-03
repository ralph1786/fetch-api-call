const url = "https://randomuser.me/api/";
const btn = document.querySelector("#btn");
const fullNameDisplay = document.querySelector("#fullname");
const avatar = document.querySelector("#avatar");
const username = document.querySelector("#username");
const city = document.querySelector("#city");
const email = document.querySelector("#email");

// Making the fetch call to the api.
btn.addEventListener("click", function(){
    fetch(url)
    .then(handleErrors)//Always handle errors first.
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors);
});    

function parseJSON (res){
    return res.json().then(function(data){
        return data.results[0];
    })
};

/*Adds all the information from that api call to the DOM. */
function updateProfile (data) {
    var fullName = data.name.first + " " + data.name.last;
    fullNameDisplay.innerText = fullName;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
};

/*Function to handle errors in case api call fails.*/ 
function handleErrors(res){
    if(!res.ok){
       throw Error(res.status); 
    }
    return res;
}

function displayErrors(err) {
    console.log("display errors");
    console.log(err);
}