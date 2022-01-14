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
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
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

export function getMyPokemons() {
  return axios.get(`http://localhost:5500/mypokemons`, {
    headers: {
      contentType: "json",
    },
  });
}

export function getMyPokemonDetail(_id) {
  return axios.get(`http://localhost:5500/mypokemons/detail/${_id}`, {
    headers: {
      contentType: "json",
    },
  });
}

export function catchPokemon(data) {
  return axios.post(`http://localhost:5500/mypokemons/catch`, {
    data: {
      pokemon_id: data.pokemon_id,
      name: data.name,
    },
    headers: {
      contentType: "json",
    },
  });
}

export function releasePokemon(_id) {
  return axios.delete(`http://localhost:5500/mypokemons/release/${_id}`, {
    headers: {
      contentType: "json",
    },
  });
}
