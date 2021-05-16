let elCchRankCurrent, elCchRankQueue, elCchDuration;
let cchRankings = [{
    "id": 1,
    "value": 15,
    "label": "Bronze",
}, {
    "id": 2,
    "value": 15,
    "label": "Silver",
}, {
    "id": 3,
    "value": 15,
    "label": "Gold",
}, {
    "id": 4,
    "value": 15,
    "label": "Platinum",
}, {
    "id": 5,
    "value": 15,
    "label": "Diamond",
}, {
    "id": 6,
    "value": 15,
    "label": "Champion",
}, {
    "id": 7,
    "value": 15,
    "label": "Grand Champion 1",
}, {
    "id": 8,
    "value": 15,
    "label": "Grand Champion 2",
}, {
    "id": 9,
    "value": 15,
    "label": "Grand Champion 3",
}, {
    "id": 10,
    "value": 15,
    "label": "Supersonic Legend",
}];

function initCoaching() {
    "use strict";
    elCchRankCurrent = document.getElementById("rank-current");
    elCchRankQueue = document.getElementById('rank-queue');
    elCchDuration = document.getElementById('duration');
    buildCchOptList(elCchRankCurrent, 0);
}

function buildCchOptList(select, id) {
    "use strict";
    select.innerHTML = null;
    //alert("Populate list");
    for (let i = id; i < cchRankings.length; i++) {
        if ((id === 0) && (i === cchRankings.length)) {
            // do nothing
            return null;
        } else {
            let el = document.createElement("option");
            el.textContent = cchRankings[i].label;
            el.value = cchRankings[i].value;
            select.appendChild(el);
        }
    }
}

$("#rank-current").change(function () {
    "use strict";
    $("#hidden").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onCchChangeCurrent() {
    "use strict";
    let opt = elCchRankCurrent.selectedIndex + 1;
    calcCchPrice();
}

/* This function should calculate the price of the service based on options given. */
function calcCchPrice() {
    // alert("Calc Price")
    "use strict";
    let duration = parseInt(elCchDuration.value);
    let price = parseInt(elCchRankCurrent.value) * duration;
    /* Convert to String Dollar Amount */
    price = price.toFixed(2);
    let text = "Boost $" + price + " USD";
    document.getElementById('coach-price-text').innerHTML = text;
}

let elCchEmail, elCchConfemail;

function initCchCntct() {
    "use strict";
    elCchEmail = document.getElementById("cchEmail");
    elCchConfemail = document.getElementById("cchConfEmail");
}

function isCchEmailValid() {
    "use strict";
    //alert('Email needs to be confirmed.');
    let email = elCchEmail.value;
    let confemail = elCchConfemail.value;
    if (email !== confemail) {
        //alert('Email Not Matching!');
        return false;
    }
}

let currentCchTab = 0; // Current tab is set to be the first tab (0)
showCchTab(currentCchTab); // Display the current tab
function showCchTab(n) {
    //alert(n);
    // This function will display the specified tab of the form ...
    "use strict";
    let x = document.getElementsByClassName("cchTab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {

        document.getElementById("prevCchBtn").style.display = "none";
        document.getElementById("nextCchBtn").style.visibility = 'visible';
    } else {
        document.getElementById("prevCchBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextCchBtn").style.visibility = 'hidden';
        //nextBtn.type ="hidden";
        document.getElementById("ppCchBtn").type = "image";
    } else {
        document.getElementById("nextCchBtn").innerHTML = "Next";
        document.getElementById("ppCchBtn").type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixCchStepIndicator(n);
}

function nextCchPrev(n) {
    // This function will figure out which tab to display
    "use strict";
    let x = document.getElementsByClassName("cchTab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateCchForm()) {
        return false;
    }
    // Hide the current tab:
    x[currentCchTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentCchTab = currentCchTab + n;
    // if you have reached the end of the form... :
    if (currentCchTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("coachingForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showCchTab(currentCchTab);
}

function validateCchForm() {
    // This function deals with validation of the form fields
    "use strict";
    let x, y, i, valid = true;
    x = document.getElementsByClassName("cchTab");
    y = x[currentCchTab].getElementsByTagName("input");
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
        document.getElementsByClassName("step")[currentCchTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixCchStepIndicator(n) {
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
initCoaching();
initCchCntct();