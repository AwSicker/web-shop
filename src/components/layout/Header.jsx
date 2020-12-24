import React from 'react';
import {Layout ,Menu} from "antd";
import {Link, withRouter} from "react-router-dom";

const HeaderComponent = (props) => {
    const {Header} = Layout;
  return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`/`]} selectedKeys={[props.location.pathname]}>
               <Menu.Item key="/"> <Link to='/'>Home</Link> </Menu.Item>
                <Menu.Item key="2">About us</Menu.Item>
                <Menu.Item key="3">Contacts</Menu.Item>
                <Menu.Item key="/reviews"> <Link to='/reviews'>Reviews</Link> </Menu.Item>
            </Menu>
        </Header>
  )
}

export const Header = withRouter(HeaderComponent)
