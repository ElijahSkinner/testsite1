let elBstRankCurrent, elBstRankDesired, elBstRankQueue, elBstBooster, elBstStreamer, elBstExpress;
let bstRankings = [{
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
    elBstRankCurrent = document.getElementById("boost-rank-current");
    elBstRankDesired = document.getElementById("boost-rank-desired");
    elBstRankQueue = document.getElementById('boost-rank-queue');
    elBstBooster = document.getElementById('bstBooster');
    elBstStreamer = document.getElementById('bstStreamer');
    elBstExpress = document.getElementById('bstExpress');
    buildBstOptList(elBstRankCurrent, 0);
    buildBstOptList(elBstRankDesired, 1);
}

function buildBstOptList(select, id) {
    "use strict";
    select.innerHTML = null;
    //alert("Populate list");
    for (let i = id; i < bstRankings.length; i++) {
        if ((id === 0) && (i === bstRankings.length)) {
            // do nothing
            return null;
        } else {
            let el = document.createElement("option");
            el.textContent = bstRankings[i].label;
            el.value = bstRankings[i].value;
            select.appendChild(el);
        }
    }
}

//Makes the form read the selection label and not the value
$("#boost-rank-current").change(function () {
    "use strict";
    $("#bstCurRank").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});
$("#rank-desired").change(function () {
    "use strict";
    $("#bstDesRank").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onBstChangeCurrent() {
    "use strict";
    let opt = elBstRankCurrent.selectedIndex + 1;
    // alert("opt:= " + opt);
    buildBstOptList(elBstRankDesired, opt);
    calcBstPrice();
}

//This function should determine if the box is checked.
function isBstBoosted() {
    "use strict";
    return document.getElementById("bstBooster").checked;
}

function isBstStreamed() {
    "use strict";
    return document.getElementById("bstStreamer").checked;
}

function isBstExpress() {
    "use strict";
    return document.getElementById("bstExpress").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcBstPrice() {
    // alert("Calc Price")
    "use strict";
    let price = parseInt(elBstRankDesired.value) - parseInt(elBstRankCurrent.value);
    /* Increases price based on what mode they user selects. */
    let queue = elBstRankQueue.value;
    if (queue === '2v2') {
        price += (0.15 * price);
    } else if (queue === '3v3') {
        price += (0.25 * price);
    }
    /* Adds % to price if user selects the checkbox. */
    if (isBstBoosted()) {
        price += (0.40 * price);
    }
    if (isBstStreamed()) {
        price += (0.15 * price);
    }
    if (isBstExpress()) {
        price += (0.50 * price);
    }
    /* Convert to String Dollar Amount */
    price = price.toFixed(2);
    let text = "Boost $" + price + " USD";
    document.getElementById('boost-price-text').innerHTML = text;
}

let elBstEmail, elBstConfemail;

function initBstCntct() {
    "use strict";
    elBstEmail = document.getElementById("bstEmail");
    elBstConfemail = document.getElementById("bstConfEmail");
}

function isBstEmailValid() {
    //alert('Email needs to be confirmed.');
    "use strict";
    let email = elBstEmail.value;
    let confemail = elBstConfemail.value;
    if (email !== confemail) {
        //alert('Email Not Matching!');
        return false;
    }
}

let currentBstTab = 0; // Current tab is set to be the first tab (0)
showBstTab(currentBstTab); // Display the current tab
function showBstTab(n) {
    //alert(n);
    // This function will display the specified tab of the form ...
    "use strict";
    let x = document.getElementsByClassName("bstTab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBstBtn").style.display = "none";
        document.getElementById("nextBstBtn").style.visibility = 'visible';
    } else {
        document.getElementById("prevBstBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBstBtn").style.visibility = 'hidden';
        //nextBtn.type ="hidden";
        document.getElementById("ppBstBtn").type = "image";
    } else {
        document.getElementById("nextBstBtn").innerHTML = "Next";
        document.getElementById("ppBstBtn").type = "hidden";
    }
    // ... and run a function that displays the correct step indicator:
    fixBstStepIndicator(n);
}

function nextBstPrev(n) {
    // This function will figure out which tab to display
    "use strict";
    let x = document.getElementsByClassName("bstTab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateBstForm()) {
        return false;
    }
    // Hide the current tab:
    x[currentBstTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentBstTab = currentBstTab + n;
    // if you have reached the end of the form... :
    if (currentBstTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showBstTab(currentBstTab);
}

function validateBstForm() {
    // This function deals with validation of the form fields
    "use strict";
    let x, y, i, valid = true;
    x = document.getElementsByClassName("bstTab");
    y = x[currentBstTab].getElementsByTagName("input");
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
        document.getElementsByClassName("step")[currentBstTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixBstStepIndicator(n) {
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
initBstCntct();