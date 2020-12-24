import React from 'react';
import {Rate} from "antd";

const Review = ({review}) => {
    const {author, message, stars} = review;
    return (
            <li className="review__item">
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
