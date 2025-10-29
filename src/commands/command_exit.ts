import { State } from "src/state";


export async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close()
    state.api.closeCache()
    process.exit(0);
}