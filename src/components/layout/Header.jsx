import React from 'react';
import {Layout ,Menu} from "antd";
import {Link} from "react-router-dom";

export const Header = () => {
    const {Header} = Layout;
  return (
    <div>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
               <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="2">About us</Menu.Item>
                <Menu.Item key="3">Contacts</Menu.Item>
            </Menu>
        </Header>
    </div>
  )
}
