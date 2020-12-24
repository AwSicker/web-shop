import React from 'react';
import {Button, Input, Layout, Rate} from "antd";
import {Footer, Header} from "../layout";

export const Reviews = () => {
    const {Content} = Layout;
    return (
        <div className="reviews">
        <Layout>
            <Header/>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

            <div className="reviews__form">
                <form>
                    <Rate defaultValue={5}/>
                    <Input placeholder="Leave your review here" maxLength={100}/>
                    <div className="reviews__submit">
                        <p className="reviews__help">To submit review please make sure to set rating and describe your stay with at least 100 characters.</p>
                        <Button type="primary">Send</Button>
                    </div>
                </form>
            </div>
                    <p>REVIEWS ....</p>
                </div>
            </Content>
            <Footer/>
        </Layout>
        </div>
    );
};
