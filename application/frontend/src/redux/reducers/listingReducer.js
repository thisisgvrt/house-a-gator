const INITIAL_STATE = {
   
   listingID: '',
};
const listingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       
        case 'PRODUCT_SET_LISTING_ID':
            return {
                ...state,
                productID: action.listingID,
            };
     

        default:
            return state;
    }
};
export default listingReducer;