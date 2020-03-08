import React from "react";
import { Card } from "antd";
import { Descriptions } from "antd";

class DetailCard extends React.Component {
  render() {
    return (
      <Card title="Detail" bordered={true} style={{ marginLeft: "8px" }}>
        <Descriptions column={1}>
          <Descriptions.Item label="Venue Name">
            Arena Rapentigny
          </Descriptions.Item>
          <Descriptions.Item label="Surface Name">Rink #1</Descriptions.Item>
          <Descriptions.Item label="Status">OK</Descriptions.Item>
          <Descriptions.Item label="Sport">Hockey</Descriptions.Item>
          <Descriptions.Item label="Server Ip">0.0.0.17594</Descriptions.Item>
        </Descriptions>
      </Card>
    );
  }
}

export default DetailCard;
