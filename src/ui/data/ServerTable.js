import React from "react";
import { connect } from "react-redux";

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

    return (
      <Table
        columns={columns}
        dataSource={this.props.servers}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: this.props.selectedSurfaceItem
            ? [this.props.selectedSurfaceItem.server.id]
            : []
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return { selectedSurfaceItem: state.data.selectedSurfaceItem };
};

export default connect(mapStateToProps)(ServerTable);
