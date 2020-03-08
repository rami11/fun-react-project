import React from "react";

import { Layout, Input, Tabs, Row, Col } from "antd";
import DetailCard from "./DetailCard";
import SurfaceTable from "./SurfaceTable";
import ServerTable from "./ServerTable";

import { connect } from "react-redux";
import { fetchData, findSurfaceItem } from "../../redux/actions/dataActions";

const { Search } = Input;
const { Content } = Layout;
const { TabPane } = Tabs;

class DataView extends React.Component {
  componentDidMount = () => {
    this.props.fetchData();
  };

  onSearchChange = event => {
    const text = event.target.value.trim();
    this.props.fetchData(text);
  };

  onSurfaceTableRowClick = rowIndex => {
    this.props.findSurfaceItem(rowIndex.key);
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
              <Tabs animated={false}>
                <TabPane tab="Surfaces" key="1">
                  <SurfaceTable
                    onRowClick={this.onSurfaceTableRowClick}
                    surfaces={this.props.surfaces}
                  />
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
  return {
    surfaces: state.data.surfaces,
    servers: state.data.servers,
    selectedSurfaceItem: state.selectedSurfaceItem
  };
};

export default connect(mapStateToProps, { fetchData, findSurfaceItem })(
  DataView
);
