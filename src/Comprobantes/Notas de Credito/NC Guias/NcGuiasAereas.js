import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MenuLateral from '../../../Template/MenuLateral.js';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class NcGuiasAereas extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
          style={{
            backgroundColor: "#fff",
            minWidth: "400",
            width:"400"
          }}
        >
          <div className="logo" />
          <MenuLateral></MenuLateral>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Documentos</Breadcrumb.Item>
              <Breadcrumb.Item>Notas de Crédito</Breadcrumb.Item>
              <Breadcrumb.Item>Notas de Crédito Guías Aereas</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default NcGuiasAereas;