import React from "react";

import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { EmptyView } from "../empty/EmptyView";
import SideNav from "./SideNav";
import DataView from "../data/DataView";

import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/dataActions";

const { Content } = Layout;

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchData();
  };

  render() {
    return (
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <SideNav />
        <Layout style={{ height: "100vh" }}>
          <Content>
            <Switch>
              <Route exact path="/" component={EmptyView} />
              <Route path="/data" component={DataView} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    surfaces: state.data.surfaces,
    servers: state.data.servers
  };
};

export default connect(mapStateToProps, { fetchData })(App);
