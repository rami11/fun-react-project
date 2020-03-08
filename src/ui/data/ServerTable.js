import React from "react";

import { Table } from "antd";

class ServerTable extends React.Component {
  render() {
    const columns = [
      {
        title: "Ip4",
        dataIndex: "ip4",
        key: "ip4"
      },
      {
        title: "Dns",
        dataIndex: "dns",
        key: "dns"
      }
    ];

    return <Table columns={columns} dataSource={this.props.servers} />;
  }
}

export default ServerTable;
