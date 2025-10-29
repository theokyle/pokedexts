import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map, mapb } from "./command_map.js";
import { CLICommand } from "src/state.js";
import { explore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

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
        }, 
        catch: {
            name: "catch",
            description: "Catch a pokemon",
            callback: commandCatch
        }, 
        inspect: {
            name: "inspect",
            description: "Get information on a pokemon",
            callback: commandInspect
        }, 
        pokedex: {
            name: "pokedex",
            description: "List pokemon caught",
            callback: commandPokedex
        }
    };
}