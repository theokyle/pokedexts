import { State } from "src/state";

export async function explore(state: State, args: string[]) {
    const location = await state.api.fetchLocation(args[0]);
    console.log(`Exploring ${args[0]}`)
    console.log("Found Pokemon:")
    location.pokemon_encounters.forEach(encounter => {
        console.log(`- ${encounter.pokemon.name}`);
    })
}