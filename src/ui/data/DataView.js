import React from "react";

import { Layout, Input, Tabs, Row, Col } from "antd";
import DetailCard from "./DetailCard";
import SurfaceTable from "./SurfaceTable";
import ServerTable from "./ServerTable";

import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/dataActions";

const { Search } = Input;
const { Content } = Layout;
const { TabPane } = Tabs;

class DataView extends React.Component {
  componentDidMount = () => {
    this.props.fetchData();
  };
  onTabChange() {
    console.log("Tab Changed!");
  }

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  onSearchChange = event => {
    const text = event.target.value.trim();
    this.props.fetchData(text);
  };

  render() {
    return (
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Search
            style={{ marginBottom: "16px" }}
            placeholder="Search"
            onChange={this.onSearchChange}
          />
          <Row>
            <Col flex="auto">
              <Tabs onChange={this.onTabChange} animated={false}>
                <TabPane tab="Surfaces" key="1">
                  <SurfaceTable surfaces={this.props.surfaces} />
                </TabPane>
                <TabPane tab="Servers" key="2">
                  <ServerTable servers={this.props.servers} />
                </TabPane>
              </Tabs>
            </Col>
            <Col flex="400px">
              <DetailCard />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return { surfaces: state.data.surfaces, servers: state.data.servers };
};

export default connect(mapStateToProps, { fetchData })(DataView);
