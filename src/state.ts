import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/command.js";
import { PokeAPI } from "./api/pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    api: PokeAPI,
    nextLocationsURL: string,
    prevLocationsURL: string
}

export function initState(cacheInterval: number) {
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    })
    const commands = getCommands()

    return {
        readline: r1,
        commands: commands,
        api: new PokeAPI(cacheInterval),
        nextLocationsURL: "",
        prevLocationsURL: "",
    }
}