"use strict"

//---------------------------global variables----------------------------------//



function displayCustomMessage(e){
    e.preventDefault();

    let nameInput = document.getElementById("fullName").value;
    let customMessage = document.getElementById("custom-message");

    customMessage.innerHTML = "Thank you "+nameInput+"! Our team of experts will be reaching out to you shortly."
}







//---------------------------event listeners-----------------------------------//
document.getElementById('submit').addEventListener("click", displayCustomMessage);