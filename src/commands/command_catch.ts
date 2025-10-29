import { State } from "src/state";

export async function commandCatch(state: State, args: string[]) {
    try {
        const pokemon = await state.api.fetchPokemon(args[0])
        console.log(`Throwing a Pokeball at ${pokemon.name}...`);
        state.pokedex[pokemon.name] = pokemon;
        console.log(`${pokemon.name} was caught!`)
    } catch(err) {
        console.log(`Pokemon ${args[0]} not found`)
    }
}