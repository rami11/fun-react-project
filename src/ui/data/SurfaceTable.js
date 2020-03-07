import React from "react";

import { Table } from "antd";
import { connect } from "react-redux";
import { fetchSurfaces } from "../../redux/actions/surfaceActions";

class SurfaceTable extends React.Component {
  componentDidMount = async () => {
    this.props.fetchSurfaces();
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
          sport: surfaces[i].sport
        });
      }
    }

    return <Table columns={columns} dataSource={data} />;
  }
}

const mapStateToProps = state => {
  return { surfaces: state.surfaces.items };
};

export default connect(mapStateToProps, { fetchSurfaces })(SurfaceTable);
