// ----- Getting the custom % tip -----

document.querySelector(".custom_tip_percentage").addEventListener("click", function() {
    var customTip = document.getElementById("custom-tip-percentage");
    var newTipPercentage = parseInt(customTip.elements[0].value);
    // console.log(newTipPercentage);

    changeButtonColor();

    var bill = Number(totalBillAmount());
    // console.log(bill);
    
    var people = totalNumberOfPeople();
    // console.log(people);

    var combinedTip = calculateTotalTip(newTipPercentage, bill)
    // console.log(combinedTip);
    
    var eachTip = (calculateTip(combinedTip, people)).toFixed(2);
    if (eachTip == "NaN" || eachTip == "Infinity") {
        eachTip = "0";
    }
    console.log(eachTip);

    var eachTotal = (totalAmountEach(combinedTip, bill, people)).toFixed(2);
    if (eachTotal == "NaN" || eachTotal == "Infinity") {
        eachTotal = "0"
    }
    console.log(eachTotal);

    document.getElementById("tip-amount").innerHTML = eachTip;
    document.getElementById("total").innerHTML = eachTotal;
})

// ----- Getting the fixed % tip -----

var tipType = document.querySelectorAll(".tip_percentage").length;
// console.log(tipType);

for (var i = 0; i < tipType; i++) {
    document.querySelectorAll(".tip_percentage")[i].addEventListener("click", function() {
        var valueInnerHTML = parseInt(this.innerHTML.split("%", 1)[0]);
        // console.log(valueInnerHTML);

        changeButtonColor();

        var bill = Number(totalBillAmount());
        // console.log(bill);
        
        var people = totalNumberOfPeople();
        // console.log(people);

        var combinedTip = calculateTotalTip(valueInnerHTML, bill)
        // console.log(combinedTip);
        
        var eachTip = (calculateTip(combinedTip, people)).toFixed(2);
        if (eachTip == "NaN" || eachTip == "Infinity") {
            eachTip = "0";
        }
        // console.log(eachTip);

        var eachTotal = (totalAmountEach(combinedTip, bill, people)).toFixed(2);
        if (eachTotal == "NaN" || eachTotal == "Infinity") {
            eachTotal = "0"
        }
        // console.log(eachTotal);

        document.getElementById("tip-amount").innerHTML = eachTip;
        document.getElementById("total").innerHTML = eachTotal;
    });
}

// ----- Get user's bill input -----

function totalBillAmount() {
    var billForm = document.getElementById("bill-form");
    var totalAmount = "";

    totalAmount = billForm.elements[0].value;

    return totalAmount;
}

// ----- Get total amount of people -----

function totalNumberOfPeople() {
    var numPeopleForm = document.getElementById("num-people-form");
    var totalPeople = "";
    
    totalPeople = numPeopleForm.elements[0].value;

    return totalPeople;
}

// ----- Calculate the total tip -----

function calculateTotalTip(tip, amount) {
    return totalTip = (tip * amount) / 100;
}

// ----- Calculate the individual tip -----

function calculateTip(totalTip, people) {
    return tipEach = totalTip / people;
}

// ----- Calculate the total per person -----

function totalAmountEach(totalTip, amount, people) {
    return (totalTip + amount) / people;
}

// ----- Resetting everything -----

document.querySelector(".reset_button").addEventListener("click", function() {
    document.getElementById("bill-form").elements[0].value = "";
    document.getElementById("num-people-form").elements[0].value = "";
    document.getElementById("custom-tip-percentage").elements[0].value = "";
    document.getElementById("tip-amount").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    resetButtonColor();
})

function changeButtonColor() {
    // var addLocation = document.getElementById("reset-button");
    // var addNewClass = addLocation.classList.add("ready_reset_button");
    // console.log(addLocation);
    // console.log(addNewClass);
    document.getElementById("reset-button").classList.add("ready_reset_button");
}

function resetButtonColor() {
    // var removeLocation = document.getElementById("reset-button");
    // var removeClass = removeLocation.classList.remove("ready_reset_button");
    // console.log(addLocation);
    // console.log(addNewClass);
    document.getElementById("reset-button").classList.remove("ready_reset_button");
}