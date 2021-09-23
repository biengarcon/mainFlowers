const initialState = {
    products: [],
    product: {},
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_FETCHED':
            return {...state, product: action.payload.product, isLoading: false};
        case 'PRODUCTS_FETCHED':
            return {...state, products: action.payload.products, isLoading: false };
        case 'GET_PRODUCT':
        case 'GET_PRODUCTS':
            return { ...state, isLoading: true };
        default:
            return state;
    }
};

export default reducer;