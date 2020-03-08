import React from "react";

import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectSiderElement } from "../../redux/actions/siderActions";

const { Sider } = Layout;

export class SideNav extends React.Component {
  onElementSelect = event => {
    const key = event.key;
    console.log(key);

    this.props.selectSiderElement(key);
  };

  render() {
    return (
      <Sider theme="light">
        <div className="logo" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          selectedKeys={[this.props.elementKey]}
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
