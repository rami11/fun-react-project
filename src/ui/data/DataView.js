import React from "react";
import { connect } from "react-redux";

import { Layout } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { Card } from "antd";
import { Descriptions } from "antd";
import { Row, Col } from "antd";
import SurfaceTable from "./SurfaceTable";
import ServerTable from "./ServerTable";
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

  render() {
    return (
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Search
            style={{ marginBottom: "16px" }}
            placeholder="Search"
            onSearch={value => console.log(value)}
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
              <Card
                title="Detail"
                bordered={true}
                style={{ marginLeft: "8px" }}
              >
                <Descriptions column={1}>
                  <Descriptions.Item label="Venue Name">
                    Arena Rapentigny
                  </Descriptions.Item>
                  <Descriptions.Item label="Surface Name">
                    Rink #1
                  </Descriptions.Item>
                  <Descriptions.Item label="Status">OK</Descriptions.Item>
                  <Descriptions.Item label="Sport">Hockey</Descriptions.Item>
                  <Descriptions.Item label="Server Ip">
                    0.0.0.17594
                  </Descriptions.Item>
                </Descriptions>
              </Card>
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
