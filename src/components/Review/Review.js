import React from 'react';
import {Rate} from "antd";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Review = ({review}) => {
    const {author, message, stars} = review;
    return (
            <li className="review__item">
                <div className="review__avatar">
                <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <p>{author}</p>
                <div className="review__item--grade">
                <span>{message}</span>
                    <div>
                <Rate defaultValue={stars} disabled/>
                    </div>
                </div>
            </li>
    );
};
export default Review;
