import { useEffect, useState } from "react";

import { Card, Row, Col } from "antd";
import { getAllPokemon, getPokemonSpesiesDetail } from "../../api/pokemonApi";

const { Meta } = Card;

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  const getAllPokemons = () => {
    var finalResults;

    getAllPokemon({
      offset: offset * page,
      limit: limit,
    })
      .then((res) => {
        console.log(res.data.results);

        finalResults = res.data.results.map((item, index) => {
          const id = offset + 1 + index;

          return {
            ...item,
            id: id,
            urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            description: "",
          };
        });

        console.log("finalResults => ", finalResults);

        setPokemons(finalResults);
      })

      .catch((err) => [console.log(err)]);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <h1> Pokemon List </h1>
      <Row>
        {pokemons.map((item) => (
          <Col
            xl={5}
            md={7}
            sm={11}
            xs={24}
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            <a href={`/detail/${item.id}`}>
              <Card hoverable cover={<img alt="example" src={item.urlImage} />}>
                <Meta title={item.name} description="www.instagram.com" />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonList;
