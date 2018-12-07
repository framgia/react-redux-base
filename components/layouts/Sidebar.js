import React from 'react'
import { withRouter } from 'next/router'
import { Layout, Menu, Icon } from 'antd'
import _ from 'lodash';
const SubMenu = Menu.SubMenu
const { Sider } = Layout;
import navpath from './../../constants/menu';
import ActiveLink from './../ActiveLink';

class Sidebar extends React.Component {

  state = {
    openKey: "sub1",
    activeKey: "menu101",
    collapsed: false,
    mode: 'inline',
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: !this.state.collapsed ? 'vertical' : 'inline',
    });
  }

  render () {
    let { activeKey, openKey } = this.state

    const _menuProcess = (nodes, pkey) => {
      return Array.isArray(nodes) && nodes.map((item, i) => {
        const menu = _menuProcess(item.child, item.key);
        if (item.alias) {
          activeKey = 'menu'+item.key
          openKey = 'sub'+pkey
        }
        if (menu.length > 0) {
          return (
            <SubMenu
              key={'sub'+item.key}
              title={<span><Icon type={item.icon} /><span className="nav-text">{item.name}</span></span>}
            >
              {menu}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={'menu'+item.key}>
              {
                item.alias ? <ActiveLink name={item.alias}>{item.icon && <Icon type={item.icon} />}{item.name}</ActiveLink> : <span>{item.icon && <Icon type={item.icon} />}{item.name}</span>
              }
            </Menu.Item>
          )
        }
      });
    }

    const menu = _menuProcess(navpath.menus);

    return (
      <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
        <div className="ant-layout-logo">
          
        </div>
        <Menu
          mode={this.state.mode} theme="dark"
          selectedKeys={[activeKey]}
          defaultOpenKeys={[openKey]}
          onClick={this.menuClickHandle}
        >
          {menu}
        </Menu>
        <div className="sider-trigger">
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
        </div>
      </Sider>
    )
  }
}

export default withRouter(Sidebar)
