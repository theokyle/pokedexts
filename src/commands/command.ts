import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map, mapb } from "./command_map.js";
import { CLICommand } from "src/state.js";
import { explore } from "./command_explore.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the next 20 locations", 
            callback: map
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 locations",
            callback: mapb
        },
        explore: {
            name: "explore",
            description: "Show the pokemon in a given location",
            callback: explore
        }
    };
}