//function to greet user
function myFunction(){
  var hey = prompt("Hello there, whats your name?");
  if(hey == null || hey == ""){
    alert("Key in your name")
  }
  else{
    alert("Hey " + hey + " welcome to Just Milkit!")
  }
}


//produce function output
function produce(){
    event.preventDefault();
    let data = [];
     data[0] = data["sA"] = parseInt(document.getElementById("sA").value);
     data[1] = data["sB"] = parseInt(document.getElementById("sB").value);
     data[2] = data["sC"] = parseInt(document.getElementById("sC").value);
     data[3] = data["sD"] = parseInt(document.getElementById("sD").value);

    let totalProduction = data.sA + data.sB + data.sC + data.sD;
    document.getElementById("odata").innerHTML += "<Br>"
    document.getElementById("odata").innerHTML += "<p>Shed A's production is " + data.sA + " litres per day</p>";
    document.getElementById("odata").innerHTML += "<p>Shed B's production is " + data.sB + " litres per day</p>";
    document.getElementById("odata").innerHTML += "<p>Shed C's production is " + data.sC + " litres per day</p>";
    document.getElementById("odata").innerHTML += "<p>Shed D's production is " + data.sD + " litres per day</p>";
    document.getElementById("odata").innerHTML += "<p>The total sheds production is " + totalProduction + " litres per day</p>";

// price at 45ksh
    var incomeDaily = totalProduction * 45;
    document.getElementById("odata").innerHTML += "<Br>"
    // document.getElementById("odata").innerHTML += "<hr>"
    document.getElementById("odata").innerHTML += "<p>Total daily income is Ksh. " + incomeDaily + " </p>";
    // document.getElementById("odata").innerHTML += "<hr>"

// total price per week
    var incomeWeekly = incomeDaily * 7;
    document.getElementById("odata").innerHTML += "<p>Total weekly income is Ksh. " + incomeWeekly + " </p>";
    // document.getElementById("odata").innerHTML += "<hr>"
    document.getElementById("odata").innerHTML += "<Br>"

    var janIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for January is Ksh. " + janIncome + " </p>"

    var febIncome = incomeDaily * 29;
    document.getElementById("odata").innerHTML += "<p> The total income for February is Ksh. " + febIncome + " </p>"

    var marchIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for March is Ksh. " + marchIncome + " </p>"

    var aprilIncome = incomeDaily * 30;
    document.getElementById("odata").innerHTML += "<p> The total income for April is Ksh. " + aprilIncome + " </p>"

    var mayIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for May is Ksh. " + mayIncome + " </p>"

    var juneIncome = incomeDaily * 30;
    document.getElementById("odata").innerHTML += "<p> The total income for June is Ksh. " + juneIncome + " </p>"

    var julyIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for July is Ksh. " + julyIncome + " </p>"

    var augIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for August is Ksh. " + augIncome + " </p>"

    var septIncome = incomeDaily * 30;
    document.getElementById("odata").innerHTML += "<p> The total income for September is Ksh. " + septIncome + " </p>"

    var octIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for October is Ksh. " + octIncome + " </p>"

    var novIncome = incomeDaily * 30;
    document.getElementById("odata").innerHTML += "<p> The total income for November is Ksh. " + novIncome + " </p>"

    var decIncome = incomeDaily * 31;
    document.getElementById("odata").innerHTML += "<p> The total income for December is Ksh. " + decIncome + " </p>"


    document.getElementById("odata").innerHTML += "<Br>"
    document.getElementById("odata").innerHTML += "<hr>"
    var incomeInLeapYear = incomeDaily * 366;
    document.getElementById("odata").innerHTML += "<p>The total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";
    document.getElementById("odata").innerHTML += "<hr>"
    document.getElementById("odata").innerHTML += "<Br>"

    // new price at 49.60ksh
    var newincomeDaily = totalProduction * 49.60;

    //new income per month
    var newjanIncome = newincomeDaily * 31;
    var newfebIncome = newincomeDaily * 29;
    var newmarchIncome = newincomeDaily * 31;
    var newaprilIncome = newincomeDaily * 30;
    var newmayIncome = newincomeDaily * 31;
    var newjuneIncome = newincomeDaily * 30;
    var newjulyIncome = newincomeDaily * 31;
    var newaugIncome = newincomeDaily * 31;
    var newseptIncome = newincomeDaily * 30;
    var newoctIncome = newincomeDaily * 31;
    var newnovIncome = newincomeDaily * 30;
    var newdecIncome = newincomeDaily * 31;
//new total income in a leap year
    var newIncomeInLeapYear = 366 * newincomeDaily;


    //difference and comparison
    var janIncomeDifference = newjanIncome - janIncome;
    var febIncomeDifference = newfebIncome - febIncome;
    var marchIncomeDifference = newmarchIncome - marchIncome;
    var aprilIncomeDifference = newaprilIncome - aprilIncome;
    var mayIncomeDifference = newmayIncome - mayIncome;
    var juneIncomeDifference = newjuneIncome - juneIncome;
    var julyIncomeDifference = newjulyIncome - julyIncome;
    var augIncomeDifference = newaugIncome - augIncome;
    var septIncomeDifference = newseptIncome - septIncome;
    var octIncomeDifference = newoctIncome - octIncome;
    var novIncomeDifference = newnovIncome - novIncome;
    var decIncomeDifference = newdecIncome - decIncome;


// report after change of price
    document.getElementById("odata").innerHTML += "<Br>"
    document.getElementById("odata").innerHTML += "<h4>***Brookside Dairies decided to raise the rate at which they buy a litre from Ksh.45 to Ksh.49.60.***</h4>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<hr>"
    document.getElementById("odata").innerHTML += "<Br>"
    document.getElementById("odata").innerHTML += "<h4>Below is a report on the comparison of how much you've make every month and the difference from the previous rate.</h4>";
    document.getElementById("odata").innerHTML += "<Br>"
    document.getElementById("odata").innerHTML += "<hr>"
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In January at the price of Ksh. 45, you earn: Ksh. " + janIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newjanIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(janIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In February at the price of Ksh. 45, you earn: Ksh. " + febIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newfebIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(febIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In March at the price of Ksh. 45, you earn: Ksh. " + marchIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newmarchIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(marchIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In April at the price of Ksh. 45, you earn: Ksh. " + aprilIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newaprilIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(aprilIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In May at the price of Ksh. 45, you earn: Ksh. " + mayIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newmayIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(mayIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In June at the price of Ksh. 45, you earn: Ksh. " + juneIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newjuneIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(juneIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In July at the price of Ksh. 45, you earn: Ksh. " + julyIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newjulyIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(julyIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In August at the price of Ksh. 45, you earn: Ksh. " + augIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newaugIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(augIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In September at the price of Ksh. 45, you earn: Ksh. " + septIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newseptIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(septIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In October at the price of Ksh. 45, you earn: Ksh. " + octIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newoctIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(octIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In November at the price of Ksh. 45, you earn: Ksh. " + novIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newnovIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(novIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

    document.getElementById("odata").innerHTML += "<p>*In December at the price of Ksh. 45, you earn: Ksh. " + decIncome + " and at Ksh. 49.60, you earn Ksh. " + Math.round(newdecIncome) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(decIncomeDifference) + ".</p>";
    document.getElementById("odata").innerHTML += "<Br>"

}
// reset or clear
function resetPage(){
    document.getElementById("odata").remove("innerHTML");
    location.reload();

}

