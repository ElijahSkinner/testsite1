let elRankCurrent, elRankQueue, elDuration;
let Rankings = [{
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
    elRankCurrent = document.getElementById("rank-current");
    elRankQueue = document.getElementById('rank-queue');
    elDuration = document.getElementById('duration');
    buildOptList(elRankCurrent, 0);
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

$("#rank-current").change(function () {
    "use strict";
    $("#hidden").val($(this).find(':selected').text());
    //alert($(this).find(':selected').text())
});

function onChangeCurrent() {
    "use strict";
    let opt = elRankCurrent.selectedIndex + 1;
    calcPrice();
}

/* This function should calculate the price of the service based on options given. */
function calcPrice() {
    // alert("Calc Price")
    "use strict";
    let duration = parseInt(elDuration.value);
    let price = parseInt(elRankCurrent.value) * duration;
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
    "use strict";
    //alert('Email needs to be confirmed.');
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
initCoaching();
initCntct();