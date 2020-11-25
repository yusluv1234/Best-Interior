import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
        hidden: true,
        cartItems: []
};

const CartReudcer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payloads]
                }
            default:
                return state;
    }
}

export default CartReudcer;