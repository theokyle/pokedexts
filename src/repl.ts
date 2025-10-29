import { State } from "./state";

export async function startREPL(state: State) {

    state.readline.prompt()
    state.readline.on('line', async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.readline.prompt()
            return;
        }

        const command = words[0];

        if (state.commands[command]) {
            try {
                await state.commands[command].callback(state)
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log("Unknown command")
        }
        state.readline.prompt()
    })
}

export function cleanInput(input: string): string[] {
    let words = input.split(" ").filter(word => word !== "");
    return words.map(word => 
        word.toLowerCase().trim()
    )
}