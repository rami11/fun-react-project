import React from "react";
import { connect } from "react-redux";

import { Table } from "antd";

class SurfaceTable extends React.Component {
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
        columns={columns}
        dataSource={data}
        footer={() => `Matched: ${data.length}`}
        rowSelection={{
          selectedRowKeys: this.props.selectedSurfaceItem
            ? [this.props.selectedSurfaceItem.id]
            : [],
          type: "radio"
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return { selectedSurfaceItem: state.data.selectedSurfaceItem };
};

export default connect(mapStateToProps)(SurfaceTable);
