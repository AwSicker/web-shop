const allOffers = (state) => state.items

export const selectOfferById = (state, id) => {
    return allOffers(state).find((offerCurrent) => offerCurrent.id === Number(id));
};


export const FilterTypes = {
    PRICE_HIGH_TO_LOW: "Price: high to low",
    PRICE_LOW_TO_HIGH : "Price: low to high"
}

export const sortItemsByPrice = (filter, items) => {
switch (filter) {
    case FilterTypes.PRICE_HIGH_TO_LOW:
        return items.slice().sort((a, b) => b.price - a.price);
    case FilterTypes.PRICE_LOW_TO_HIGH:
        return items.slice().sort((a, b) => a.price - b.price);
    default:
        return FilterTypes.PRICE_HIGH_TO_LOW
}
}
