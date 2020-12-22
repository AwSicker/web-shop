import {mocks} from "../../mocks/mocks";
import {ActionType} from "../actions/actions";
import {FilterTypes, sortItems} from "../../utils/utils";

const initialState = {
    items: mocks,
    filter: FilterTypes.PRICE_HIGH_TO_LOW
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.GET_ITEMS:
            return {...state, items: state.items};
        case ActionType.SORT_ITEMS:
            return {...state,
                filter: payload.filter,
                items: sortItems(payload.filter, state.items)}

        default:
            return state;
    }
};
