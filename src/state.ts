import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/command.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
}

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>
}

export function initState() {
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    })
    const commands = getCommands()

    return {
        readline: r1,
        commands: commands
    }
}