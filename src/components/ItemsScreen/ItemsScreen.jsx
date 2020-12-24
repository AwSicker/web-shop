import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from 'antd';
import {ItemCard} from "../ItemCard";
import {Sorting} from "../Sorting";

const ItemsScreenComponent = ({items}) => {
  return (
      <div className="site-card-wrapper">
          <Sorting/>
          <Row gutter={[16, 16]}>
              {items.map((item) =>
                  <Col span={8} key={item.id}>
                  <ItemCard item={item}/>
                  </Col>
              )}
          </Row>
      </div>
  )
}

const mapStateToProps = (state) => ({
    items: state.items
})

export const ItemsScreen = connect(mapStateToProps)(ItemsScreenComponent)
