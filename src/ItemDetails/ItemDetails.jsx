import React from 'react';
import './styles.css';
import {connect} from "react-redux";
import {selectOfferById} from "../utils/utils";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {Footer, Header} from "../components/layout";


export const ItemDetailsComponent = ({item}) => {
    const {Content} = Layout
  return (
        <Layout>
            <Header/>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <p>{item.title}</p>
                    <img src={item.photo} alt="..."/>
                    <p>{item.material}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            </Content>
            <Footer/>
        </Layout>
  )
}

const mapStateToProps = (state, props) => ({
    item: selectOfferById(state, props.match.params.id)
})

export const ItemDetails = compose(withRouter, connect(mapStateToProps))(ItemDetailsComponent)
