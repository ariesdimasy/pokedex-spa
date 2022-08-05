import axios from "axios";

const endpoint = "https://pokedex-backend-api-2022.herokuapp.com";

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
  return axios.get(`${endpoint}/mypokemons`, {
    headers: {
      contentType: "json",
    },
  });
}

export function getMyPokemonDetail(_id) {
  return axios.get(`${endpoint}/mypokemons/detail/${_id}`, {
    headers: {
      contentType: "json",
    },
  });
}

export function catchPokemon(data) {
  return axios.post(
    `${endpoint}/mypokemons/catch`,
    {
      pokemon_id: parseInt(data.pokemon_id),
      name: data.name,
    },
    {
      headers: {
        contentType: "json",
      },
    }
  );
}

export function releasePokemon(_id) {
  return axios.delete(`${endpoint}/mypokemons/release/${_id}`, {
    headers: {
      contentType: "json",
    },
  });
}
