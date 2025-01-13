
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let user = { name: "Jane Doe", role: "Developer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}

function greetUser(name) {
    const message = `Hello, ${name}! Welcome to JavaScript.`;
    const dynamicContent = document.getElementById("dynamic-content");
    const greeting = document.createElement("p");
    greeting.textContent = message;
    dynamicContent.appendChild(greeting);
}

function checkVotingEligibility() {
    const userAge = parseInt(prompt("Enter your age:"));
    const votingMessage = userAge >= 18
        ? "You are eligible to vote!"
        : "You are not eligible to vote yet.";

    const dynamicContent = document.getElementById("dynamic-content");
    const votingParagraph = document.createElement("p");
    votingParagraph.textContent = votingMessage;
    dynamicContent.appendChild(votingParagraph);
}

function displayNumbers() {
    const numberList = document.getElementById("number-list");
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

function modifyDOM() {
    const heading = document.querySelector("h1");
    heading.textContent = "JavaScript in Action!";

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    const dynamicContent = document.getElementById("dynamic-content");
    dynamicContent.appendChild(newParagraph);
}

displayNumbers();
modifyDOM();
