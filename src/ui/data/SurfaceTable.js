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

    return <Table columns={columns} dataSource={this.props.surfaces} />;
  }
}

const mapStateToProps = state => {
  return { surfaces: state.surfaces.items };
};

export default connect(mapStateToProps, { fetchSurfaces })(SurfaceTable);
