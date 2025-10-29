import { startREPL } from "./repl.js"
import { State, initState } from "./state.js";

function main() {
  const state: State = initState(1000 * 60 * 5)
  startREPL(state)
}

main();