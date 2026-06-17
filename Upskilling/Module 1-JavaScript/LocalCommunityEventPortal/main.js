// Task 1
console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
};

// Task 2
const eventName = "Music Festival";
const eventDate = "2026-07-10";
let seats = 20;

console.log(
`${eventName} on ${eventDate} Seats:${seats}`
);

// Task 5 - Class
class Event {
    constructor(name, category, date, seats) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Events Array
let events = [
    new Event(
        "Music Festival",
        "Music",
        "2026-07-10",
        20
    ),

    new Event(
        "Sports Meet",
        "Sports",
        "2026-08-15",
        15
    ),

    new Event(
        "Baking Workshop",
        "Workshop",
        "2026-09-20",
        10
    )
];

// Task 6 - push
events.push(
    new Event(
        "Dance Show",
        "Music",
        "2026-10-01",
        30
    )
);

// filter
let musicEvents =
events.filter(
    e => e.category === "Music"
);

// map
let cards =
events.map(
    e => `Workshop on ${e.name}`
);

console.log(cards);

// Task 4 - Functions
function addEvent(event){
    events.push(event);
}

function registerUser(event){
    try{
        if(event.seats <= 0){
            throw "No Seats Available";
        }

        event.seats--;

        renderEvents();

    }catch(error){
        alert(error);
    }
}

function filterEventsByCategory(
    category,
    callback
){
    let result =
    events.filter(
        e =>
        category === "All" ||
        e.category === category
    );

    callback(result);
}

// Closure
function registrationCounter(){
    let total = 0;

    return function(){
        total++;
        return total;
    }
}

let countRegistration =
registrationCounter();

// Task 7 - DOM
const container =
document.querySelector("#eventContainer");

function renderEvents(list = events){

    container.innerHTML = "";

    list.forEach(event => {

        if(
            event.seats <= 0
        ){
            return;
        }

        let card =
        document.createElement("div");

        card.className = "card";

        card.innerHTML =
        `
        <h3>${event.name}</h3>
        <p>${event.category}</p>
        <p>Seats: ${event.seats}</p>
        <button onclick="registerUser(events[${events.indexOf(event)}])">
        Register
        </button>
        `;

        container.appendChild(card);
    });
}

renderEvents();

// Task 8 - onchange
document
.getElementById("categoryFilter")
.onchange =
function(){

    filterEventsByCategory(
        this.value,
        renderEvents
    );
};

// keydown search
document
.getElementById("searchBox")
.addEventListener(
"keydown",
function(){

    let text =
    this.value.toLowerCase();

    let result =
    events.filter(
        e =>
        e.name
        .toLowerCase()
        .includes(text)
    );

    renderEvents(result);
});

// Task 5 - Object.entries
console.log(
Object.entries(events[0])
);

// Task 9 - Promise
document
.getElementById("loading")
.style.display = "block";

fetch("events.json")
.then(response =>
response.json()
)
.then(data => {
    console.log(data);

    document
    .getElementById("loading")
    .style.display = "none";
})
.catch(error =>
console.log(error)
);

// async-await
async function loadEvents(){

    try{

        document
        .getElementById("loading")
        .style.display = "block";

        let response =
        await fetch(
            "events.json"
        );

        let data =
        await response.json();

        console.log(data);

        document
        .getElementById("loading")
        .style.display = "none";

    }catch(error){
        console.log(error);
    }
}

loadEvents();

// Task 10
function showEvent(
name = "Community Event"
){
    console.log(name);
}

let copy =
[...events];

let {
    name,
    category
} = events[0];

console.log(name);
console.log(category);

// Task 11
document
.getElementById(
"registrationForm"
)
.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let form =
    this.elements;

    let username =
    form.username.value;

    let email =
    form.email.value;

    let event =
    form.eventName.value;

    if(
        username === "" ||
        email === ""
    ){
        document
        .getElementById(
        "error"
        ).innerHTML =
        "All fields required";

        return;
    }

    document
    .getElementById(
    "error"
    ).innerHTML = "";

    console.log(
        username,
        email,
        event
    );

    // Task 12
    setTimeout(
        sendRegistration,
        2000,
        {
            username,
            email,
            event
        }
    );
});

function sendRegistration(
data
){

    fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:
        JSON.stringify(data)
    }
    )
    .then(response =>
    response.json()
    )
    .then(data => {

        document
        .getElementById(
        "message"
        )
        .innerHTML =
        "Registration Successful";

        console.log(data);
    })
    .catch(error => {

        document
        .getElementById(
        "message"
        )
        .innerHTML =
        "Registration Failed";

        console.log(error);
    });
}

// Task 14 - jQuery
$("#registerBtn").click(
function(){
    $(".card").fadeOut(500)
              .fadeIn(500);
});

// Benefit of React/Vue
console.log(
"React and Vue make large applications easier to manage using reusable components."
);