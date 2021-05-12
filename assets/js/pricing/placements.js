let elPltRankCurrent, elPltRankQueue, elPltBooster, elPltMatchesPlayed, elPltStreamer, elPltExpress;
let pltRankings = [{
    "id": 1,
    "value": 1,
    "label": "Bronze",
}, {
    "id": 2,
    "value": 1,
    "label": "Silver",
}, {
    "id": 3,
    "value": 1,
    "label": "Gold",
}, {
    "id": 4,
    "value": 1,
    "label": "Platinum",
}, {
    "id": 5,
    "value": 1.5,
    "label": "Diamond",
}, {
    "id": 6,
    "value": 2,
    "label": "Champion",
}, {
    "id": 7,
    "value": 3,
    "label": "Grand Champion 1",
}, {
    "id": 8,
    "value": 4,
    "label": "Grand Champion 2",
}, {
    "id": 9,
    "value": 5,
    "label": "Grand Champion 3",
}, {
    "id": 10,
    "value": 7,
    "label": "Supersonic Legend",
}];

function initPlacements() {
    "use strict";
    elPltRankCurrent = document.getElementById("rank-current");
    elPltRankQueue = document.getElementById('rank-queue');
    elPltMatchesPlayed = document.getElementById('matches');
    elPltBooster = document.getElementById('booster');
    elPltStreamer = document.getElementById('streamer');
    elPltExpress = document.getElementById('express');
    buildPltOptList(elPltRankCurrent, 0);
}

function buildPltOptList(select, id) {
    "use strict";
    select.innerHTML = null;
    //alert("Populate list");
    for (let i = id; i < pltRankings.length; i++) {
        if ((id === 0) && (i === pltRankings.length)) {
            // do nothing
            return null;
        } else {
            let el = document.createElement("option");
            el.textContent = pltRankings[i].label;
            el.value = pltRankings[i].value;
            select.appendChild(el);
        }
    }
}

$("#rank-current").change(function () {
    "use strict";
    $("#hidden").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onPltChangeCurrent() {
    "use strict";
    calcPltPrice();
}

//This function should determine if the box is checked.
function isPltBoosted() {
    "use strict";
    return document.getElementById("booster").checked;
}

function isPltStreamed() {
    "use strict";
    return document.getElementById("streamer").checked;
}

function isPltExpress() {
    "use strict";
    return document.getElementById("express").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcPltPrice() {
    "use strict";
    // alert("Calc Price")
    let matchesPlayed = parseInt(elPltMatchesPlayed.value);
    let price = parseInt(elPltRankCurrent.value) * matchesPlayed;
    /* Adds % to price if user selects the checkbox. */
    if (isPltBoosted()) {
        price += (0.40 * price);
    }
    if (isPltStreamed()) {
        price += (0.15 * price);
    }
    if (isPltExpress()) {
        price += (0.50 * price);
    }
    /* Increases price based on what mode they user selects. */
    let queue = elPltRankQueue.value;
    if (queue === '2v2') {
        price += (0.15 * price);
    } else if (queue === '3v3') {
        price += (0.25 * price);
    }
    /* Convert to String Dollar Amount */
    price = price.toFixed(2);
    let text = "Boost $" + price + " USD";
    document.getElementById('price-text').innerHTML = text;
}

let elPltEmail, elPltConfemail;

function initPltCntct() {
    "use strict";
    elPltEmail = document.getElementById("email");
    elPltConfemail = document.getElementById("confEmail");
}

function isPltEmailValid() {
    "use strict";
    //alert('Email needs to be confirmed.');
    let email = elPltEmail.value;
    let confemail = elPltConfemail.value;
    if (email !== confemail) {
        //alert('Email Not Matching!');
        return false;
    }
}

let currentPltTab = 0; // Current tab is set to be the first tab (0)
showPltTab(currentPltTab); // Display the current tab
function showPltTab(n) {
    "use strict";
    //alert(n);
    // This function will display the specified tab of the form ...
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevPltBtn").style.display = "none";
        document.getElementById("nextPltBtn").style.visibility = 'visible';
    } else {
        document.getElementById("prevPltBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextPltBtn").style.visibility = 'hidden';
        //nextBtn.type ="hidden";
        document.getElementById("ppPltBtn").type = "image";
    } else {
        document.getElementById("nextPltBtn").innerHTML = "Next";
        document.getElementById("ppPltBtn").type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixPltStepIndicator(n);
}

function nextPltPrev(n) {
    "use strict";
    // This function will figure out which tab to display
    let x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validatePltForm()) {
        return false;
    }
    // Hide the current tab:
    x[currentPltTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentPltTab = currentPltTab + n;
    // if you have reached the end of the form... :
    if (currentPltTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showPltTab(currentPltTab);
}

function validatePltForm() {
    "use strict";
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentPltTab].getElementsByTagName("input");
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
        document.getElementsByClassName("step")[currentPltTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixPltStepIndicator(n) {
    "use strict";
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

// Make sure to initialize the script.
initPlacements();
initPltCntct();