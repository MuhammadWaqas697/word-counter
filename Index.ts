
import inquirer from "inquirer";

const answers: {
    Sentence: string
} = await inquirer.prompt (
    [
        {
            name: "Sentence",
            type: "input",
            message: "Please enter your sentence to count your word: "


        }
    ]
)

const words = answers.Sentence.trim().split(" ")

//Print the arrayes of the word
console.log(words);

//Print the word count of the sentence  to the sonsole
console.log(`Your sentence word count is ${words.length}`);
