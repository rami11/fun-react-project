import React from "react";
import { connect } from "react-redux";

import { Layout } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { Row, Col } from "antd";
import SurfaceTable from "./SurfaceTable";

const { Search } = Input;
const { Content } = Layout;
const { TabPane } = Tabs;

class DataView extends React.Component {
  onTabChange() {
    console.log("Tab Changed!");
  }

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    // const rowSelection = {
    //   id,
    //   onChange: this.onSelectChange
    // };

    return (
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Search
            style={{ marginBottom: "16px" }}
            placeholder="Search"
            onSearch={value => console.log(value)}
          />
          <Tabs onChange={this.onTabChange}>
            <TabPane tab="Surfaces" key="1">
              <Layout>
                <Content>
                  <SurfaceTable />
                </Content>
              </Layout>
            </TabPane>
            <TabPane tab="Servers" key="2">
              Servers
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    );
  }
}

export default DataView;
