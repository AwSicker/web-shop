import React from 'react';
import {Card} from "antd";
import {Link} from "react-router-dom";

export const ItemCard = ({item}) => {
  return (
    <div>
       <Link to={`/item/${item.id}`}> <Card className="item-card__item" title={item.title} bordered={false}>
          <img className="item-card__img" src={item.photo} alt={item.title}/>
            <p>{item.price}</p>
        </Card>
           </Link>
    </div>
  )
}
