#! /usr/bin/env node
import inquirer from "inquirer";
let while_condition = true;
while (while_condition === true) {
    let ans = await inquirer.prompt([
        {
            name: "player1",
            type: "list",
            message: "player1, Select an option",
            choices: ["Rock", "Paper", "Scissor"],
        },
        {
            name: "player2",
            type: "list",
            message: "player2, Select an option",
            choices: ["Rock", "Paper", "Scissor"],
        },
    ]);
    if (ans.player1 === ans.player2) {
        console.log("It's tie");
    }
    else if ((ans.player1 == "Rock" && ans.player2 == "Scissor") ||
        (ans.player1 == "Scissor" && ans.player2 == "Paper") ||
        (ans.player1 == "Paper" && ans.player2 == "Rock")) {
        console.log("Player1 wins");
    }
    else {
        console.log("Player2 wins");
    }
    let forConfirm = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "Do you want to play more",
    });
    if (forConfirm.ans === false) {
        while_condition = false;
    }
}
console.log("Thanks for play");
