import { State } from "src/state";


export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:")
    console.log()

    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`)
    }
}