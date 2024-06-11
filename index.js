#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.hex('#FF69B4')(`╭━━━━━━━╮
┃          ┃
┃  **Quiz**  ┃
┃  **Master** ┃
┃          ┃
╰━━━━━━━╯`));
console.log(chalk.blue("Welcome to my TypeScript Quiz Game"));
console.log(chalk.blue("You'll have to gain maximum 7 points..."));
let points = 0;
// Question 1
let question1 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q1. What is the purpose of the `any` type in TypeScript?",
        choices: ["To specify a type for a variable", "To disable type checking", "To enable type inference", "To create a union type"],
    }
]);
if (question1.answer === "To disable type checking") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 2
let question2 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q2. What is the difference between `let` and `const` in TypeScript?",
        choices: ["`let` is used for variables, `const` is used for constants", "`let` is used for constants, `const` is used for variables", "There is no difference", "One is used for global variables, the other for local variables"],
    }
]);
if (question2.answer === "`let` is used for variables, `const` is used for constants") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 3
let question3 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q3. What is the purpose of the `interface` keyword in TypeScript?",
        choices: ["To define a class", "To define a type", "To define a function", "To define a variable"],
    }
]);
if (question3.answer === "To define a type") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 4
let question4 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q4. What is the purpose of the `type` keyword in TypeScript?",
        choices: ["To define a class", "To define a type alias", "To define a function", "To define a variable"],
    }
]);
if (question4.answer === "To define a type alias") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 5
let question5 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q5. What is the purpose of the `enum` keyword in TypeScript?",
        choices: ["To define a class", "To define a type", "To define a set of named values", "To define a function"],
    }
]);
if (question5.answer === "To define a set of named values") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 6
let question6 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q6. What is the purpose of the `namespace` keyword in TypeScript?",
        choices: ["To define a class", "To define a type", "To define a module", "To define a variable"],
    }
]);
if (question6.answer === "To define a module") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 7
let question7 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q7. What is the purpose of the `never` type in TypeScript?",
        choices: ["To specify a type for a variable", "To disable type checking", "To indicate that a function never returns", "To create a union type"],
    }
]);
if (question7.answer === "To indicate that a function never returns") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 8
let question8 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q8. What is the purpose of the `readonly` keyword in TypeScript?",
        choices: ["To make a variable read-only", "To make a variable writable", "To define a type", "To create a union type"],
    }
]);
if (question8.answer === "To make a variable read-only") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 9
let question9 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q9. What is the purpose of the `abstract` keyword in TypeScript?",
        choices: ["To define an abstract class", "To define a concrete class", "To define a type", "To create a union type"],
    }
]);
if (question9.answer === "To define an abstract class") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Question 10
let question10 = await inquirer.prompt([
    {
        type: "list",
        name: "answer",
        message: "Q10. What is the purpose of the `infer` keyword in TypeScript?",
        choices: ["To infer the type of a variable", "To specify a type for a variable", "To define a type", "To create a union type"],
    }
]);
if (question10.answer === "To infer the type of a variable") {
    points += 1;
    console.log(chalk.green("Correct! You have " + points + " points"));
}
else {
    console.log(chalk.red("Incorrect. You still have " + points + " points"));
}
// Display final score
console.log(chalk.blue.bold("You have completed the quiz! Your final score is " + points + " out of 10."));
if (points >= 7) {
    console.log(chalk.green.bold("Congratulations! You have passed the quiz!"));
}
else {
    console.log(chalk.red("Sorry, you did not pass the quiz. Better luck next time!"));
}
