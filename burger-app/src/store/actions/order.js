import * as actionTypes from "./actionTypes";
import axios from "axios";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_ERROR,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}




export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post("https://react-my-burger-13a65.firebaseio.com/orders.json", orderData)
        .then( response => {
            dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        })
        .catch( error => {
            dispatch(purchaseBurgerFail(error));
        });

    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
}