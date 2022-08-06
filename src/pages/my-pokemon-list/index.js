import { useEffect, useState } from "react";
import { Card, Row, Col, Pagination } from "antd";
import { getMyPokemons } from "../../api/pokemonApi";
import { Link } from "react-router-dom";

const MyPokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const { Meta } = Card;

  const getAllMyPokemon = () => {
    var finalResults;
    setOffset(limit * (page - 1));
    setPokemons([]);
    getMyPokemons({
      offset: limit * (page - 1),
      limit: limit,
    }).then((res) => {
      finalResults = res.data.data.map((item, index) => {
        const id = limit * (page - 1) + index + 1;

        return {
          ...item,

          id: id,
          pokemonId: item.pokemonId,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.pokemonId}.png`,
          description: "",
        };
      });

      console.log("finalResults => ", finalResults);

      setPokemons(finalResults);
      setTotalData(res.data.count);
    });
  };

  const onShowSizeChange = (dt) => {};

  useEffect(() => {
    getAllMyPokemon();
  }, [page]);

  return (
    <div>
      <h1> My Pokemon List </h1>
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
            <Link to={`/my-pokemon/${item._id}`} key={item._id}>
              <Card
                hoverable
                cover={<img alt="example" src={item.imageUrl} key={item._id} />}
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

export default MyPokemonList;
