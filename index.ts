#! /usr/bin/env node


import inquirer from "inquirer";
let myBalance = 10000;
let myPin  = 3456;
let pinAnswer = await inquirer.prompt([


    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    }
]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin number!!!");


    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select your option",
                type: "list",
                choices: ["withdraw","checkBalance"]    
                },
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message: "enter the amount",
                    type: "number",
                }
            ]

        );
        myBalance -= amountAns.amount;
        console.log("my remaing balance is:" + myBalance)

    }
    else if (operationAns.operation === "checkBalance")
        console.log("your current balance is" + myBalance)

}

else {
    console.log("incorrect pin number");
}



