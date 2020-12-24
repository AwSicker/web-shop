import React from 'react';

const Review = ({review}) => {
    const {author, message, stars} = review;
    return (
            <li className="review__item">
                <p>{author}</p>
                <p>{message}</p>
                <p>{stars}</p>
            </li>
    );
};
export default Review;
