import axios from "axios";

export function getAllPokemon(params) {
  return axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: params,
    headers: {
      contentType: "json",
    },
  });
}

export function getDetailPokemon(pokemonId) {
  return axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
      id: pokemonId,
    },
    headers: {
      contentType: "json",
    },
  });
}

export function getPokemonSpesiesDetail(pokemonId) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`, {
    headers: {
      contentType: "json",
    },
  });
}
