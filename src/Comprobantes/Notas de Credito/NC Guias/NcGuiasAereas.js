import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Menu, Breadcrumb, Input, Select, Row, Col, Tooltip, DatePicker } from 'antd';
import MenuLateral from '../../../Template/MenuLateral.js';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const ordinalnc = (
  <Select defaultValue="001001" style={{ width: 90 }}>
    <Option value="001001">001001</Option>
    <Option value="001002">001002</Option>
  </Select>
);
class NcGuiasAereas extends Component {
  state = {
    collapsed: false,
  };


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

onChangeFechaEmision = (date, dateString) => {
  console.log(date, dateString);
}

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
          style={{
            backgroundColor: "#fff",
            minWidth: "400",
            width: "400"
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
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Row>
                <Col span={4}>
                  <Tooltip placement="top" title={"Ingrese la secuencia en caso de ser manual en formato 000000123"}>
                    <Input addonBefore={ordinalnc} defaultValue="" placeholder="Secuencial" />
                  </Tooltip>

                </Col>
                <Col span={4} offset={6}>
                  <Tooltip placement="top" title={"Ingrese el documento de sustento en el formato XXX-YYY-1234546789"}>
                    <Input placeholder="Documento sustento" />
                  </Tooltip>
                </Col>
                <Col span={4} offset={6}>
                  <DatePicker placeholder="Fecha Emisión" onChange={this.onChangeFechaEmision} format='DD/MM/YYYY'/>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default NcGuiasAereas;