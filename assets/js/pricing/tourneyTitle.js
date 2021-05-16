let elTourneyRank, elWins, elTrnBooster, elTrnStreamer, elTrnExpress;
let trnRankings = [{
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

function initTourney() {
    "use strict";
    elTourneyRank = document.getElementById("rank-tourn");
    elWins = document.getElementById("amt-wins");
    elTrnBooster = document.getElementById('trnBooster');
    elTrnStreamer = document.getElementById('trnStreamer');
    elTrnExpress = document.getElementById('trnExpress');
    buildTrnOptList(elTourneyRank, 0);
}

function buildTrnOptList(select, id) {
    "use strict";
    select.innerHTML = null;
    //alert("Populate list");
    for (let i = id; i < trnRankings.length; i++) {
        if ((id === 0) && (i === trnRankings.length)) {
            return null;
            // do nothing
        } else {
            let el = document.createElement("option");
            el.textContent = trnRankings[i].label;
            el.value = trnRankings[i].value;
            select.appendChild(el);
        }
    }
}

$("#rank-tourn").change(function () {
    "use strict";
    $("#hidden").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onTrnChangeCurrent() {
    "use strict";
    calcTrnPrice();
}

//This function should determine if the box is checked.
function isTrnBoosted() {
    "use strict";
    return document.getElementById("booster").checked;
}

function isTrnStreamed() {
    "use strict";
    return document.getElementById("streamer").checked;
}

function isTrnExpress() {
    "use strict";
    return document.getElementById("express").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcTrnPrice() {
    // alert("Calc Price")
    "use strict";
    let wins = parseInt(elWins.value);
    let trnPrice = parseInt(elTourneyRank.value) * wins;
    /* Adds % to price if user selects the checkbox. */
    if (isTrnBoosted()) {
        trnPrice += (0.40 * trnPrice);
    }
    if (isTrnStreamed()) {
        trnPrice += (0.15 * trnPrice);
    }
    if (isTrnExpress()) {
        trnPrice += (0.50 * trnPrice);
    }
    /* Convert to String Dollar Amount */
    trnPrice = trnPrice.toFixed(2);
    let text = trnPrice + " USD";
    document.getElementById('tourney-price-text').innerHTML = text;
}

let elTrnEmail, elTrnConfemail;

function initTrnCntct() {
    "use strict";
    elTrnEmail = document.getElementById("trnEmail");
    elTrnConfemail = document.getElementById("trnConfEmail");
}

function isTrnEmailValid() {
    "use strict";
    //alert('Email needs to be confirmed.');
    let email = elTrnEmail.value;
    let confemail = elTrnConfemail.value;
    if (email !== confemail) {
        //alert('Email Not Matching!');
        return false;
    }
}

let currentTrnTab = 0; // Current tab is set to be the first tab (0)
showTrnTab(currentTrnTab); // Display the current tab
function showTrnTab(n) {
    //alert(n);
    // This function will display the specified tab of the form ...
    "use strict";
    let x = document.getElementsByClassName("trnTab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevTrnBtn").style.display = "none";
        document.getElementById("nextTrnBtn").style.visibility = 'visible';
    } else {
        document.getElementById("prevTrnBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextTrnBtn").style.visibility = 'hidden';
        //nextBtn.type ="hidden";
        document.getElementById("ppTrnBtn").type = "image";
    } else {
        document.getElementById("nextTrnBtn").innerHTML = "Next";
        document.getElementById("ppTrnBtn").type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixTrnStepIndicator(n);
}

function nextTrnPrev(n) {
    // This function will figure out which tab to display
    "use strict";
    let x = document.getElementsByClassName("trnTab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateTrnForm()) {
        return false;
    }
    // Hide the current tab:
    x[currentTrnTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTrnTab = currentTrnTab + n;
    // if you have reached the end of the form... :
    if (currentTrnTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("tourneyForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTrnTab(currentTrnTab);
}

function validateTrnForm() {
    // This function deals with validation of the form fields
    "use strict";
    let x, y, i, valid = true;
    x = document.getElementsByClassName("trnTab");
    y = x[currentTrnTab].getElementsByTagName("input");
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
        document.getElementsByClassName("step")[currentTrnTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixTrnStepIndicator(n) {
    // This function removes the "active" class of all steps...
    "use strict";
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

// Make sure to initialize the script.
initTourney();
initTrnCntct();