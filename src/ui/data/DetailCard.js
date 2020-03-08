import React from "react";
import { Card } from "antd";
import { Descriptions } from "antd";
import { connect } from "react-redux";
import { Empty } from "antd";

class DetailCard extends React.Component {
  render() {
    if (this.props.selectedSurfaceItem) {
      const si = this.props.selectedSurfaceItem;

      return (
        <Card title="Detail" bordered={false} style={{ marginLeft: "8px" }}>
          <Descriptions column={1}>
            <Descriptions.Item label="Venue Name">
              {si.venueName}
            </Descriptions.Item>
            <Descriptions.Item label="Surface Name">
              {si.surfaceName}
            </Descriptions.Item>
            <Descriptions.Item label="Status">{si.status}</Descriptions.Item>
            <Descriptions.Item label="Sport">{si.sport}</Descriptions.Item>
            <Descriptions.Item label="Server Ip">
              {si.server.ip4}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      );
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
  }
}
const mapStateToProps = state => {
  return { selectedSurfaceItem: state.data.selectedSurfaceItem };
};

export default connect(mapStateToProps)(DetailCard);
