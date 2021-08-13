// ----- Getting the % tip -----

var tipType = document.querySelectorAll(".tip_percentage").length;
// console.log(tipType);

for (var i = 0; i < tipType; i++) {
    document.querySelectorAll(".tip_percentage")[i].addEventListener("click", function() {
        var valueInnerHTML = parseInt(this.innerHTML.split("%", 1)[0]);

        var bill = Number(totalBillAmount());
        // console.log(bill);
        
        var people = totalNumberOfPeople();
        // console.log(people);

        var combinedTip = calculateTotalTip(valueInnerHTML, bill)
        // console.log(combinedTip);
        
        var eachTip = (calculateTip(combinedTip, people)).toFixed(2);
        console.log(eachTip);

        var eachTotal = (totalAmountEach(combinedTip, bill, people)).toFixed(2);
        console.log(eachTotal);

        document.getElementById("tip-amount").innerHTML = eachTip;
        document.getElementById("total").innerHTML = eachTotal;
    });
}

// ----- Get user's bill input -----
function totalBillAmount() {
    var billForm = document.getElementById("bill-form");
    var totalAmount = "";
    for (var i = 0; i < billForm.length; i++) {
        totalAmount += billForm.elements[i].value;
    }
    return totalAmount;
}

// ----- Get total amount of people -----
function totalNumberOfPeople() {
    var numPeopleForm = document.getElementById("num-people-form");
    var totalPeople = "";
    for (var i = 0; i < numPeopleForm.length; i++) {
        totalPeople += numPeopleForm.elements[i].value;
    }
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