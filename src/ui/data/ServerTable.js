import React from "react";

import { Table } from "antd";

class ServerTable extends React.Component {
  constructor(props) {
    super(props);
  }

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
