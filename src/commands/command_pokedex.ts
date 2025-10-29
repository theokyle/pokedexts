import { State } from "src/state";

export async function commandPokedex(state: State) {
    if(Object.keys(state.pokedex).length === 0) {
        console.log("Your pokedex is empty")
        return;
    }

    console.log("Your Pokedex:")
    for(const pokemon in state.pokedex) {
        console.log(` - ${pokemon}`)
    }
}