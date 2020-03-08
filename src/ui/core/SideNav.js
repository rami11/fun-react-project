import React from "react";

import { connect } from "react-redux";
import { selectSiderElement } from "../../redux/actions/siderActions";
import { NavLink } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

export class SideNav extends React.Component {
  onElementSelect = event => {
    const key = event.key;
    this.props.selectSiderElement(key);
  };

  getSelectedKey() {
    const pathname = window.location.pathname;
    let key = "";
    if (pathname === "/data") {
      key = "2";
    } else {
      key = "1";
    }
    return [key];
  }

  render() {
    return (
      <Sider
        style={{
          position: "fixed",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
        theme="light"
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={this.getSelectedKey()}
          onSelect={this.onElementSelect}
        >
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

const mapStateToProps = state => {
  const data = { elementKey: state.sider.elementKey };
  return data;
};

export default connect(mapStateToProps, { selectSiderElement })(SideNav);
