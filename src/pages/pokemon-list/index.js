import { useEffect, useState } from "react";

import { Card, Row, Col, Pagination } from "antd";
import { getAllPokemon } from "../../api/pokemonApi";
import { Link } from "react-router-dom";

const { Meta } = Card;

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const getAllPokemons = () => {
    var finalResults;
    setOffset(limit * (page - 1));
    setPokemons([]);
    getAllPokemon({
      offset: limit * (page - 1),
      limit: limit,
    })
      .then((res) => {
        finalResults = res.data.results.map((item, index) => {
          const id = limit * (page - 1) + index + 1;

          return {
            ...item,
            id: id,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            description: "",
          };
        });

        console.log("finalResults => ", finalResults);

        setPokemons(finalResults);
        setTotalData(res.data.count);
      })

      .catch((err) => [console.log(err)]);
  };

  const onShowSizeChange = (dt) => {
    console.log(dt);
    // alert(JSON.stringify(dt));
  };

  useEffect(() => {
    getAllPokemons();
  }, [page]);

  return (
    <div>
      <h1> Pokemon List </h1>
      <Row style={{ margin: "20px 0" }} key={1}>
        <Col span={24}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={(newPage) => {
              setPage(newPage);
            }}
            defaultCurrent={1}
            current={page}
            defaultPageSize={20}
            pageSize={limit}
            total={totalData}
          />
        </Col>
      </Row>
      <Row key={2}>
        {pokemons.map((item) => (
          <Col
            xl={5}
            md={7}
            sm={11}
            xs={24}
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Card
                hoverable
                cover={<img alt="example" src={item.imageUrl} key={item.id} />}
              >
                <Meta
                  style={{ textAlign: "center" }}
                  title={item.id + ". " + item.name}
                  description=""
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row style={{ margin: "20px 0" }} key={1}>
        <Col span={24}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={(newPage) => {
              setPage(newPage);
            }}
            defaultCurrent={1}
            current={page}
            defaultPageSize={20}
            pageSize={limit}
            total={totalData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PokemonList;
