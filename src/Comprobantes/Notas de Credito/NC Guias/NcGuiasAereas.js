import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

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
            minWidth: "350",
            width:"350"
          }}
        >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['ncguias']} mode="inline"
          style={{
            
          }}
          >

            <SubMenu
              key="documentos"
              title={
                <span>
                  <Icon type="file-text" />
                  <span>Documentos</span>
                </span>
              }
            >
              <Menu.Item key="facturacion">Facturación</Menu.Item>

              <Menu.Item key="retenciones">Retenciones</Menu.Item>
              <Menu.Item key="anulaciones">Anulaciones</Menu.Item>
              <SubMenu
                key="notascredito"
                title={
                  <span>
                    <span>Notas de Crédito</span>
                  </span>
                }
              >
                <Menu.Item  key="ncguias">Notas de Crédito Guías Aereas</Menu.Item>
              </SubMenu>

            </SubMenu>
            <SubMenu
              key="usermenu"
              title={
                <span>
                  <Icon type="user" />
                  <span>Usuario</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Icon type="setting" />
                <span>Preferencias</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="logout" />
                <span>Cerrar Sesión</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
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