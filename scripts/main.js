// idk how this works, taken from mdn docs 

const listItems = document.querySelectorAll("li");

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

/*
// store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// update the text content of the <h1> 
myHeading.textContent = "this hard :/ ";
*/ 