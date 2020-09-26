import * as types from './../constants/ActionType'
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: types.REMOVE_PRODUCT_IN_CART,
        product
    }
}

export const actDescreasQuantity = (product) => {
    return {
        type: types.DESCREAS_QUANTITY,
        product
    }
}

export const actIncreasQuantity = (product) => {
    return {
        type: types.INCREAS_QUANTITY,
        product
    }
}