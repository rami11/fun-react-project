import React from "react";
import { Provider } from "react-redux";

import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import { SideNav } from "./SideNav";
import { EmptyView } from "../empty/EmptyView";
import DataView from "../data/DataView";
import store from "../../redux/store";

const { Content } = Layout;

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout style={{ minHeight: "100vh" }}>
          <SideNav />
          <Layout>
            <Content>
              <Switch>
                <Route exact path="/" component={EmptyView} />
                <Route path="/data" component={DataView} />
              </Switch>
            </Content>
            {/* <Footer style={{ textAlign: "center", fontSize: "13px" }}>
            Rami Serapian ©2019
          </Footer> */}
          </Layout>
        </Layout>
      </Provider>
    );
  }
}
