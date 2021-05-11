let elRankCurrent, elRankDesired, elRankQueue, elBooster, elStreamer, elExpress;
let Rankings = [{
    "id": 1,
    "value": 0,
    "label": "Bronze I",
}, {
    "id": 2,
    "value": 3,
    "label": "Bronze II",
}, {
    "id": 3,
    "value": 6,
    "label": "Bronze III",
}, {
    "id": 4,
    "value": 12,
    "label": "Silver I",
}, {
    "id": 5,
    "value": 18,
    "label": "Silver II",
}, {
    "id": 6,
    "value": 24,
    "label": "Silver III",
}, {
    "id": 7,
    "value": 30,
    "label": "Gold I",
}, {
    "id": 8,
    "value": 38,
    "label": "Gold II",
}, {
    "id": 9,
    "value": 46,
    "label": "Gold III",
}, {
    "id": 10,
    "value": 52,
    "label": "Platinum I",
}, {
    "id": 11,
    "value": 62,
    "label": "Platinum II",
}, {
    "id": 12,
    "value": 72,
    "label": "Platinum III",
}, {
    "id": 13,
    "value": 82,
    "label": "Diamond I",
}, {
    "id": 14,
    "value": 94,
    "label": "Diamond II",
}, {
    "id": 15,
    "value": 106,
    "label": "Diamond III",
}, {
    "id": 16,
    "value": 118,
    "label": "Champion I",
}, {
    "id": 17,
    "value": 133,
    "label": "Champion II",
}, {
    "id": 18,
    "value": 148,
    "label": "Champion III",
}, {
    "id": 19,
    "value": 188,
    "label": "Grand Champion I",
}, {
    "id": 20,
    "value": 230,
    "label": "Grand Champion II",
}, {
    "id": 21,
    "value": 300,
    "label": "Grand Champion III",
}, {
    "id": 22,
    "value": 450,
    "label": "Supersonic Legend",
}];

function initBoosted() {
    "use strict";
    elRankCurrent = document.getElementById("rank-current");
    elRankDesired = document.getElementById("rank-desired");
    elRankQueue = document.getElementById('rank-queue');
    elBooster = document.getElementById('booster');
    elStreamer = document.getElementById('streamer');
    elExpress = document.getElementById('express');
    buildOptList(elRankCurrent, 0);
    buildOptList(elRankDesired, 1);
}

function buildOptList(select, id) {
    "use strict";
    select.innerHTML = null;
    //alert("Populate list");
    for (let i = id; i < Rankings.length; i++) {
        if ((id === 0) && (i === Rankings.length)) {
            // do nothing
            return null;
        } else {
            let el = document.createElement("option");
            el.textContent = Rankings[i].label;
            el.value = Rankings[i].value;
            select.appendChild(el);
        }
    }
}

//Makes the form read the selection label and not the value
$("#rank-current").change(function () {
    "use strict";
    $("#curRank").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});
$("#rank-desired").change(function () {
    "use strict";
    $("#desRank").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onChangeCurrent() {
    "use strict";
    let opt = elRankCurrent.selectedIndex + 1;
    // alert("opt:= " + opt);
    buildOptList(elRankDesired, opt);
    calcPrice();
}

//This function should determine if the box is checked.
function isBoosted() {
    "use strict";
    return document.getElementById("booster").checked;
}

function isStreamed() {
    "use strict";
    return document.getElementById("streamer").checked;
}

function isExpress() {
    "use strict";
    return document.getElementById("express").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcPrice() {
    // alert("Calc Price")
    "use strict";
    let price = parseInt(elRankDesired.value) - parseInt(elRankCurrent.value);
    /* Increases price based on what mode they user selects. */
    let queue = elRankQueue.value;
    if (queue === '2v2') {
        price += (0.15 * price);
    } else if (queue === '3v3') {
        price += (0.25 * price);
    }
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
    let text = "Boost $" + price + " USD";
    document.getElementById('price-text').innerHTML = text;
}

let elEmail, elConfemail;

function initCntct() {
    "use strict";
    elEmail = document.getElementById("email");
    elConfemail = document.getElementById("confEmail");
}

function isEmailValid() {
    //alert('Email needs to be confirmed.');
    "use strict";
    let email = elEmail.value;
    let confemail = elConfemail.value;
    if (email !== confemail) {
        //alert('Email Not Matching!');
        return false;
    }
}

let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function showTab(n) {
    //alert(n);
    // This function will display the specified tab of the form ...
    "use strict";
    let x = document.getElementsByClassName("tab");
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
        document.getElementById("ppBtn").type = "image";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
        document.getElementById("ppBtn").type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    "use strict";
    let x = document.getElementsByClassName("tab");
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
    "use strict";
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
    "use strict";
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

// Make sure to initialize the script.
initBoosted();
initCntct();