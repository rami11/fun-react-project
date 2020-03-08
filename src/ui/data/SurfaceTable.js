import React from "react";

import { Table } from "antd";

class SurfaceTable extends React.Component {
  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const columns = [
      {
        title: "Venue Name",
        dataIndex: "venueName",
        key: "venuName"
      },
      {
        title: "Surface Name",
        dataIndex: "surfaceName",
        key: "surfaceName"
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

    let data = [];
    let surfaces = this.props.surfaces;
    if (surfaces) {
      for (let i = 0; i < surfaces.length; i++) {
        data.push({
          key: surfaces[i].id,
          surfaceName: surfaces[i].surfaceName,
          venueName: surfaces[i].venueName,
          status: surfaces[i].status,
          sport: surfaces[i].sport
        });
      }
    }

    return (
      <Table
        onRow={record => {
          return {
            onClick: () => {
              this.props.onRowClick(record);
            }
          };
        }}
        selection={this.onSelectChange}
        columns={columns}
        dataSource={data}
        footer={() => `Matched: ${data.length}`}
        // rowSelection={9}
        selections={true}
      />
    );
  }
}

export default SurfaceTable;
