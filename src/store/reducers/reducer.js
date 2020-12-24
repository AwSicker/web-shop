import {mocks, reviews} from "../../mocks/mocks";
import {ActionType} from "../actions/actions";
import {FilterTypes, sortItemsByPrice} from "../../utils/utils";

const initialState = {
    items: mocks,
    filter: FilterTypes.PRICE_HIGH_TO_LOW,
    reviews: reviews
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.GET_ITEMS:
            return {...state, items: state.items};
        case ActionType.SORT_ITEMS:
            return {...state,
                filter: payload.filter,
                items: sortItemsByPrice(payload.filter, state.items)}
        case ActionType.GET_REVIEWS:
            return {...state, reviews: state.reviews}

        default:
            return state;
    }
};
