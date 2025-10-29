import { State } from "src/state";


export async function map(state: State) {
    const shallowLocations = await state.api.fetchLocations(state.nextLocationsURL);

    if(shallowLocations.next) {
        state.nextLocationsURL = shallowLocations.next
    }

    if(shallowLocations.previous) {
        state.prevLocationsURL = shallowLocations.previous
    }

    shallowLocations.results.forEach(location => console.log(location.name))
}

export async function mapb(state: State) {
        if (!state.prevLocationsURL) {
            console.log("You are on the first page")
            return
        }

        const shallowLocations = await state.api.fetchLocations(state.prevLocationsURL);

        if(shallowLocations.next) {
            state.nextLocationsURL = shallowLocations.next
        }

        if(shallowLocations.previous) {
            state.prevLocationsURL = shallowLocations.previous
        }

        shallowLocations.results.forEach(location => console.log(location.name))
}