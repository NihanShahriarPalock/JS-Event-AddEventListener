
// option 2 
const makeGreen = document.getElementById("Make-Green");
makeGreen.onclick = MakeGreen;

function MakeGreen() {
    document.body.style.backgroundColor = "Green";

}

// option 2 another 
const makePink = document.getElementById("Make-Pink");
makePink.onclick = function MakePink() {

    document.body.style.backgroundColor = "Pink";

}


// option 3
function Purple() {
    document.body.style.backgroundColor = "Purple"

}


// option 4
// const yellowId = document.getElementById('yellowID')
// yellowId.addEventListener("click", yellowBG)

// function yellowBG() {
//     document.body.style.backgroundColor = "Yellow";
// }



// option 4  another here just direct assign function 
const yellowId = document.getElementById('yellowID')
yellowId.addEventListener("click", function yellowBG() {
    document.body.style.backgroundColor = "Yellow";
})

// option 5, most use addEventListener
document.getElementById("orangeID").addEventListener("click", function () {
    document.body.style.backgroundColor = "Orange"
})


//  Text Change Using function
function textChange() {
    document.getElementById("default-text").innerText = "Text changed by handle on click function "
}

const eventListener = document.getElementById('event-listener').addEventListener("click", function () {
    const handleStatus = document.getElementById("default-text").innerText = "Text changed by event listener"

})


//  Text Change Using addEventListener
document.getElementById("update-btn").addEventListener("click", function () {

    const input = document.getElementById('input-text');
    const inputBlank = input.value;
    const inputHeader = document.getElementById('input-header')
    inputHeader.innerText = inputBlank;
    // Set the input box blank again 
    input.value = "";
})


// Create a new comment and text comes from input area
document.getElementById("post-btn").addEventListener("click", function () {
    const commentInput = document.getElementById("textarea");
    const commentInputValue = commentInput.value;
    // console.log(commentInputValue);
    const commentContainer = document.getElementById('append-paragraph')
    const appendParagraph = document.createElement("p");
    appendParagraph.innerText = commentInputValue;
    commentContainer.appendChild(appendParagraph);
    commentInput.value = "";

})

// More Event Listener

document.getElementById("KeyUpInput").addEventListener("keyup", function (event) {
    console.log(event.target.value);
})
document.getElementById("InputFocus").addEventListener("focus", function () {
    console.log("Focus on input field");
    // this.style.borderColor = "red"; 
});