"use strict";
/*jslint node: true */

let elTourneyRank, elWins, elBooster, elStreamer, elExpress;

let Rankings;
Rankings = [{
    "id": 1,
    "value": 10,
    "label": "Bronze Title",
}, {
    "id": 2,
    "value": 10,
    "label": "Silver Title",
}, {
    "id": 3,
    "value": 15,
    "label": "Gold Title",
}, {
    "id": 4,
    "value": 20,
    "label": "Platinum Title",
}, {
    "id": 5,
    "value": 25,
    "label": "Diamond Title",
}, {
    "id": 6,
    "value": 30,
    "label": "Champion Title",
}, {
    "id": 7,
    "value": 40,
    "label": "Grand Champion Title",
}, {
    "id": 8,
    "value": 80,
    "label": "Supersonic Legend Title",
}];

function initFormTourney() {
    elTourneyRank = document.getElementById("rank-tourn");
    elWins = document.getElementById("amt-wins");
    elBooster = document.getElementById('booster');
    elStreamer = document.getElementById('streamer');
    elExpress = document.getElementById('express');
    buildOptList(elTourneyRank, 0);
}

function buildOptList(select, id) {
    select.innerHTML = null;

    //alert("Populate list");
    for (let i = id; i < Rankings.length; i++) {
        if (!((id === 0) && (i === Rankings.length))) {
            let el = document.createElement("option");
            el.textContent = Rankings[i].label;
            el.value = Rankings[i].value;
            select.appendChild(el);
        }
    }
}

$("#rank-tourn").change(function () {
    $("#hidden").val($(this).find(':selected').text());
    Window.alert($(this).find(':selected').text());
});

function onChangeCurrent() {
    calcPrice();
}

//This function should determine if the box is checked.
function isBoosted() {
    return document.getElementById("booster").checked;
}
function isStreamed() {
    return document.getElementById("streamer").checked;
}
function isExpress() {
    return document.getElementById("express").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcPrice() {
    // alert("Calc Price")
    let wins = parseInt(elWins.value);
    let price = parseInt(elTourneyRank.value) * wins;

    /* Adds % to price if user selects the checkbox. */
    if (isBoosted()) {
        price += (0.40 * price);
    }
    if (isStreamed()) {
        price += (0.15 * price);
    }

    if (isExpress()) {
        price += (0.50 * price);
    }

    /* Convert to String Dollar Amount */
    price = price.toFixed(2);
    document.getElementById('price-text').innerHTML = "Boost $" + price + " USD";
}


let elEmail, elConfEmail;
let ppBtn;

function initCntct()
{
    elEmail = document.getElementById("email");
    elConfEmail = document.getElementById("confEmail");
}

function isEmailValid()
{
    Window.alert('Email needs to be confirmed.');
    let email = elEmail.value;
    let confEmail = elConfEmail.value;
    if(email !== confEmail)
    {
        Window.alert('Email Not Matching!');
        return false;
    }
}


let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    const x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.visibility = 'visible';
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").style.visibility = 'hidden';
        //nextBtn.type ="hidden";
        ppBtn.type = "image";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
        ppBtn.type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    const x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateForm()) {
        return false;
    }
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value === "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

// Make sure to initialize the script.
initCntct();