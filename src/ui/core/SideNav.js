import React from "react";

import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

export class SideNav extends React.Component {
  render() {
    return (
      <Sider theme="light">
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <NavLink exact to="/">
              <span>Empty Tab</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/data">
              <span>Data</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
