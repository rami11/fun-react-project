import React from "react";
import { connect } from "react-redux";
import { fetchVenues } from "../../redux/actions/venueActions";

import { Layout } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { Row, Col } from "antd";
import { Table } from "antd";
// import { SurfaceTable } from "./SurfaceTable";

import Api from "../../api/LiveBarn";

const { Search } = Input;
const { Content, Header } = Layout;
const { TabPane } = Tabs;

class DataView extends React.Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
    // this.loadData();
    this.props.fetchVenues();
  };

  // loadData = async () => {
  //   const response = await Api.get("/");
  //   const data = response.data;
  //   this.setState({ data });
  // };

  onTabChange() {
    console.log("Tab Changed!");
  }

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const columns = [
      {
        title: "Venue Name",
        dataIndex: "venueName",
        key: "venu-name"
      },
      {
        title: "Surface Name",
        dataIndex: "surfaceName",
        key: "suface-name"
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "Sport",
        dataIndex: "sport",
        key: "sport"
      }
    ];

    // const id = this.props.venues.id;
    console.log(this.props.venues);
    // const id = this.props.venues[0].id;
    // console.log(id);

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
                  {/* <SurfaceTable data={this.state.data} /> */}
                  <Table
                    // rowSelection={rowSelection}
                    // style={{ height: "100%" }}
                    columns={columns}
                    dataSource={this.props.venues}
                    // pagination={{ pageSize: 5 }}
                    // scroll={{ y: 240 }}
                  />
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

const mapStateToProps = state => {
  console.log(state);

  return { venues: state.venues.items };
};

export default connect(mapStateToProps, { fetchVenues })(DataView);
