import { State } from "src/state";

export async function commandCatch(state: State, args: string[]) {
    const pokemon = await state.api.fetchPokemon(args[0])
    
    if (pokemon) {
        console.log(`Throwing a Pokeball at ${pokemon.name}...`);
        state.pokedex[pokemon.name] = pokemon;
        console.log(`${pokemon.name} was caught!`)
    }
}