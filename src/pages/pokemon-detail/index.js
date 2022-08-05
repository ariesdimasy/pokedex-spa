import { useEffect, useState } from "react";
import { Row, Col, Card, Tag, Button, Alert } from "antd";
import { getDetailPokemon, catchPokemon } from "./../../api/pokemonApi";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PokemonDetail = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const { id } = useParams();
  const { Meta } = Card;

  const getPokemonDetail = () => {
    getDetailPokemon(id).then((res) => {
      setPokemonDetail(res.data);
      console.log(res.data);
    });
  };

  const catchThisPokemon = (data) => {
    catchPokemon(data)
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: "Success",
            text: JSON.stringify(res.data.message),
            timer: 3000,
            icon: "success",
          }).then(() => {
            window.location.replace("http://localhost:3000/my-pokemon");
          });
        } else {
          Swal.fire({
            title: "Failed",
            text: JSON.stringify(res.data.message),
            timer: 3000,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 20 }}> {pokemonDetail.name} </h1>
      <Row>
        <Col xs={24} sm={24} lg={8} md={8} style={{ marginRight: 20 }}>
          <Card
            hoverable
            style={{ marginBottom: 20 }}
            cover={
              <img
                width={150}
                alt="example"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              />
            }
          >
            <Meta title={pokemonDetail.name} description="" />
          </Card>
        </Col>
        <Col xs={24} sm={24} lg={12} md={12}>
          <div style={{ height: "100v" }}>
            <table
              style={{
                borderCollapse: "collapse",
                border: "1px solid #f0f0f0",
                width: "100%",
              }}
              border="1"
              cellPadding={10}
              cellSpacing={10}
            >
              <tbody>
                <tr>
                  <td style={{ width: "20%" }}> Abilities </td>
                  <td style={{ width: "80%" }}>
                    {pokemonDetail?.abilities?.map((item) => {
                      return (
                        <Tag style={{ marginRight: 10 }}>
                          {item.ability.name}
                        </Tag>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td> Base Experience </td>
                  <td> {pokemonDetail.base_experience} </td>
                </tr>
                <tr>
                  <td> Weight </td>
                  <td> {pokemonDetail.weight} </td>
                </tr>
                <tr>
                  <td> Types </td>
                  <td>
                    {pokemonDetail?.types?.map((item) => {
                      return (
                        <Tag style={{ marginRight: 10 }}>{item.type.name}</Tag>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td> Stats </td>
                  <td>
                    {/* <List
                      size="small"
                      dataSource={pokemonDetail.stats}
                      renderItem={(item) => (
                        <List.Item>
                          {item.stat.name} : {item.base_stat}
                        </List.Item>
                      )}
                    /> */}
                    <ul>
                      {pokemonDetail?.stats?.map((item) => {
                        return (
                          <li style={{ marginRight: 10 }}>
                            {item.stat.name} : {item.base_stat}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: "20px 0" }}>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              catchThisPokemon({
                name: pokemonDetail.name,
                pokemon_id: id,
              });
            }}
          >
            {" "}
            Catch !{" "}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PokemonDetail;
