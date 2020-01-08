import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Menu, Breadcrumb, Input, Select, Row, Col, Tooltip, DatePicker, Divider, InputNumber, Button } from 'antd';
import MenuLateral from '../../../Template/MenuLateral.js';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const { TextArea } = Input;
const ordinalfac = (
  <Select defaultValue="001001" style={{ width: 90 }}>
    <Option value="001001">001001</Option>
    <Option value="001002">001002</Option>
  </Select>
);
class FacturacionNormal extends Component {
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

  handleChange = (value) => {
    console.log("selected ${value}");
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
              <Breadcrumb.Item>Facturación</Breadcrumb.Item>
              <Breadcrumb.Item>Facturación Normal</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <br /><br />
              <Row gutter={[0, 48]}>
                <Col span={4}>
                  <Tooltip placement="top" title={"Ingrese la secuencia en caso de ser manual en formato 000000123"}>
                    <Input addonBefore={ordinalfac} placeholder="Secuencial" allowClear={true} maxLength={9} />
                  </Tooltip>

                </Col>
                <Col span={4} offset={6}>
                  <Tooltip placement="top" title={"Ingrese la cuenta por cobrar donde seria cargada la factura"}>
                    <Select placeholder={"Cuenta Por Cobrar"} style={{ width: 250 }} onChange={this.handleChange}>
                      <Option value="112101">112101 - Clientes Nacionales</Option>
                      <Option value="112102">112102 - Cias Relacionadas</Option>

                    </Select>
                  </Tooltip>
                </Col>
                <Col span={4} offset={6}>
                  <Tooltip placement="top" title={"Fecha de emisión de la factura"}>
                    <DatePicker placeholder="Fecha Emisión" onChange={this.onChangeFechaEmision} format='DD/MM/YYYY' />
                  </Tooltip>
                </Col>
              </Row>
              <br /><br />
              <Divider>Items a Facturar</Divider>
              <br /><br />
              <Row gutter={[0, 48]}>
                <Col span={5}>
                  <Tooltip placement="top" title={"Escoja el servicio a facturar"}>
                    <Select
                      showSearch
                      showArrow
                      style={{ minWidth: 300 }}
                      placeholder="Servicio"
                      optionFilterProp="children"

                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="001">001 - Servicios Administrativos</Option>
                      <Option value="002">002 - Honorarios Profesionales</Option>
                      <Option value="003">003 - Flete Aereo</Option>
                    </Select>
                  </Tooltip>
                </Col>
                <Col span={5} offset={2}>
                  <Tooltip placement="top" title={"Glosa del item facturado. Máximo 300 caracteres"}>
                    <TextArea placeholder="Detalles Adicionales" allowClear={true} maxLength={300} rows={1} />
                  </Tooltip>
                </Col>
                <Col span={1} offset={2}>
                  <Tooltip placement="top" title={"Seleccione si el item lleva IVA"}>
                    <Select defaultValue={"12"} >
                      <Option value="12">12%</Option>
                      <Option value="0">0%</Option>
                    </Select>
                  </Tooltip>
                </Col>
                <Col span={2} offset={1}>
                  <Tooltip placement="top" title={"Ingrese el valor del item a facturar sin IVA"}>
                    <InputNumber min={0} step={0.01} precision={2} />
                  </Tooltip>
                </Col>
                <Col span={2} offset={1}>
                  <Tooltip placement="top" title={"Total Item"}>
                    <InputNumber min={0} step={0.01} precision={2} readOnly={true} />
                  </Tooltip>
                </Col>
                <Col span={1}>
                  <Tooltip placement="top" title={"Eliminar Item"}>
                    <Button type="danger" shape="circle" icon="delete" />
                  </Tooltip>
                </Col>
              </Row>
              <br /><br />
              <Divider>Detalles a Facturar</Divider>
              <br /><br />
              <Row gutter={[0, 48]}>
                <Col span={2}>
                  codigo
                </Col>
                <Col span={4} offset={1}>
                  descripcion
                </Col>
                <Col span={6} offset={2}>
                  detalles adicionales
                </Col>
                <Col span={1} offset={2}>
                  IVA
                </Col>
                <Col span={2} offset={2}>
                  valor
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

export default FacturacionNormal;