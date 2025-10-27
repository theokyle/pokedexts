import { createInterface } from "node:readline";

export function startREPL() {
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    })

    r1.prompt()
    r1.on('line', async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            r1.prompt()
            return;
        }

        console.log(`Your command was: ${words[0]}`)
        r1.prompt()
    })
}

export function cleanInput(input: string): string[] {
    let words = input.split(" ").filter(word => word !== "");
    return words.map(word => 
        word.toLowerCase().trim()
    )
}