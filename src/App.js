import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Menu, Row, Col } from "antd";

import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import MyPokemonList from "./pages/my-pokemon-list";
import MyPokemonDetail from "./pages/my-pokemon-detail";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App(props) {
  console.log(" ===> ", window.location.pathname);

  return (
    <div className="App">
      <Layout style={{}}>
        <Row justify={"center"}>
          {/* <Col xs={0} sm={7} md={9} xl={4}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div
                className="logo"
                style={{ textAlign: "center", fontSize: 20, color: "white" }}
              >
                Pokedex
              </div>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                  <a href="/">Pokemon List</a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a href="/my-pokemon">My Pokemon List</a>
                </Menu.Item>
              </Menu>
            </Sider>
          </Col> */}
          <Col xs={24} sm={17} md={15} xl={19}>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={() => {
                    if (window.location.pathname === "/my-pokemon") {
                      return ["2"];
                    } else if (window.location.pathname === "/") {
                      return ["1"];
                    } else if (window.location.pathname.includes("detail")) {
                      return ["1"];
                    }
                  }}
                >
                  <Menu.Item key={1}>
                    {" "}
                    <a href="./">All List</a>{" "}
                  </Menu.Item>
                  <Menu.Item key={2}>
                    {" "}
                    <a href="./my-pokemon">My List</a>{" "}
                  </Menu.Item>
                </Menu>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route path="./" element={<PokemonList />} />

                  <Route path="./my-pokemon" element={<MyPokemonList />} />
                  <Route path="./detail/:id" element={<PokemonDetail />} />
                  <Route
                    path="./my-pokemon/:_id"
                    element={<MyPokemonDetail />}
                  />
                </Routes>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Pokedex ©2022 Created by Aries Dimas Yudhistira
              </Footer>
            </Layout>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
