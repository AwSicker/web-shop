import React from 'react';
import {ItemCarousel} from "../ItemCarousel";
import {ItemsScreen} from "../ItemsScreen";
import {Layout} from "antd";
import {Footer, Header} from "../layout";

export const MainPage = () => {
    const {Content} = Layout
  return (
        <Layout>
            <Header/>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
<ItemCarousel/>
<ItemsScreen/>
                </div>
            </Content>
            <Footer/>
        </Layout>
  )
}
