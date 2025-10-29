import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor(cacheInterval: number) {
    this.#cache = new Cache(cacheInterval)
  }

  closeCache() {
    this.#cache.stopReapLoop()
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ? pageURL :  `${PokeAPI.baseURL}/location-area`

    const cached = this.#cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    } 

    const response = await fetch(url)
    const locations = await response.json();
    this.#cache.add(url, locations)
    return locations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`

    const cached = this.#cache.get<Location>(url);
    if (cached) {
      return cached;
    } 

    const response = await fetch(url);
    const location = await response.json();
    this.#cache.add(url, location)
    return location;
  }
}

export type ShallowLocations = {
  count: number,
  next: string,
  previous: any,
  results: {
    name: string;
    url: string;
  }[]
};

export type Location = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: Array<{
    encounter_method: {
      name: string
      url: string
    }
    version_details: Array<{
      rate: number
      version: {
        name: string
        url: string
      }
    }>
  }>
  location: {
    name: string
    url: string
  }
  names: Array<{
    name: string
    language: {
      name: string
      url: string
    }
  }>
  pokemon_encounters: Array<{
    pokemon: {
      name: string
      url: string
    }
    version_details: Array<{
      version: {
        name: string
        url: string
      }
      max_chance: number
      encounter_details: Array<{
        min_level: number
        max_level: number
        condition_values: Array<any>
        chance: number
        method: {
          name: string
          url: string
        }
      }>
    }>
  }>
}