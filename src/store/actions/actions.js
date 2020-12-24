export const ActionType = {
    GET_ITEMS: "GET_ITEMS",
    SORT_ITEMS: "SORT_ITEMS",
    GET_REVIEWS: "GET_REVIEWS"
}

   export const sortItems = (filter) => ({
       type: ActionType.SORT_ITEMS,
       payload: filter,
    });


