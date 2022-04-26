// TODO Complete this file as described by the README.md
// Do NOT modify any files outside of this.

let hasLoadedFamilyPlanPaymentsData = false;

function showMessageForm() {
	document.getElementById("messageArea").style.visibility = "visible";
}

function sendMessage() {
	console.log(document.getElementById("messageField").value);
}

function addPizzazz() {
	document.getElementsByName("flashSale")[0].style.color = "red";
	document.getElementsByName("flashSale")[0].style["font-size"] = "20px";
	document.getElementsByName("flashSale")[0].style["background-color"] = "black";
}

function saveBalance() {
	var input = document.getElementById("balanceInput").value;
	input = input.trim();

	if (input.length < 1) {
		console.log("Cannot update balance, syntax error!");
	} else if (isNaN(input)) {
		console.log("Cannot update balance, syntax error!");
	} else {
		document.getElementById("balance").innerHTML = input;
	}
}

function printBalance() {
	var balance = document.getElementById("balance").innerHTML;
	console.log("You have " + balance + " in your gift card!");
}

function alertBalance() {
	var balance = document.getElementById("balance").innerHTML;
	//var input = document.getElementById("balanceInput").value;

	if (balance < 0) {
		alert("We have a special offer for you! Reload your balance now and earn back 10% bonus rewards.");
	}
	else if (0 <= balance <= 100) {
		alert("Your current balance is " + balance + ". Customers with balance greater than 100 becomes a VIP member and gets a special discount!")
	}
	else {
		alert("You are our VIP member! You get a 10% discount on every purchase.")
	}
}

function loadFamilyPlanPaymentsData() {

	if (hasLoadedFamilyPlanPaymentsData) {
		return;
	} else {
		hasLoadedFamilyPlanPaymentsData = true;
	}

	let familyPlanPaymentsData = [
		{
			name: "Maria",
			amountDue: 0.00
		},
		{
			name: "Daniel",
			amountDue: 35.57
		},
		{
			name: "Jin",
			amountDue: 5.58
		},
		{
			name: "Ahmad",
			amountDue: 25.91
		}
	];

	var table = document.getElementsByTagName("tbody")[0];

	for (var i = 0; i < familyPlanPaymentsData.length; i++) {
		var row = table.insertRow();
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		if (familyPlanPaymentsData[i].amountDue > 20) {
			row.style.color = "red";
		}
		cell1.innerHTML = familyPlanPaymentsData[i].name;
		cell2.innerHTML = familyPlanPaymentsData[i].amountDue;
	}
}

function addOrderRows() {
	var table = document.getElementById("myOrders").getElementsByTagName("tbody")[0];

	fetch("http://cs571.cs.wisc.edu:53706/api/badgershop/orders?amount=4")
		.then(response => {
			return response.json();
		}).then(json => {
			for (var i = 0; i < json.length; i++) {
				var row = table.insertRow();
				var cell1 = row.insertCell();
				var cell2 = row.insertCell();
				var cell3 = row.insertCell();
				cell1.innerHTML = json[i].date;
				cell2.innerHTML = json[i].productName;
				cell3.innerHTML = json[i].amount;
			}
		})
		.catch(error => console.error(error)) // Print error
}

function clearOrderRows() {
	var tb = document.getElementById("myOrders").getElementsByTagName("tbody")[0];
	tb.innerHTML = "";
}
