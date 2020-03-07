import React from "react";

import { Table } from "antd";

export class SurfaceTable extends React.Component {
  constructor(props) {
    super(props);
    this._data = props.data;
  }
  render() {
    this.loadData();
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

    return <Table columns={columns} dataSource={this._data} />;
  }
}
