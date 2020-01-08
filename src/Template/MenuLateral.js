import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu, Icon } from 'antd';
const { Sider } = Layout;

const { SubMenu } = Menu;

class MenuLateral extends Component {
    render() {
        return (
            <Menu theme="light" defaultSelectedKeys={['facnormal']} mode="inline"
                style={{

                }}
            >

                <SubMenu
                    key="documentos"
                    title={
                        <span>
                            <Icon type="file-text" />
                            <span>Comprobantes</span>
                        </span>
                    }
                >
                    <SubMenu
                        key="facturacion"
                        title={
                            <span>
                                <span>Facturación</span>
                            </span>
                        }
                    >
                        <Menu.Item key="facnormal">Facturación Normal</Menu.Item>
                    </SubMenu>
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
                        <Menu.Item key="ncguias">Notas de Crédito Guías Aereas</Menu.Item>
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
        );
    }
}


export default MenuLateral;