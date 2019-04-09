import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_MANAGERS = 'GET_MANAGERS'
const POST_MANAGERID = 'POST_MANAGERID'

const initialState = {
    products: [],
    users: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS: 
            return {...state, products: action.products}
        case POST_MANAGERID: 
            const newProducts = [...state.products].map(product => {
                if (product.id === productId) {
                    product.managerId = (managerId * 1)
                }
                return product
            })
            return {...state, products: newProducts}
        case GET_MANAGERS: 
            return {...state, managers: action.managers}
        default: 
            return state
    }
}

export const getProductsAction = (products) => (
    {
        type: GET_PRODUCTS,
        products
    }
)

export const getManagersAction = (managers) => (
    {
        type: GET_MANAGERS,
        managers
    }
)

export const postManagerIdAction = (productId, managerId) => (
    {
        type: POST_MANAGERID,
        productId,
        managerId
    }
)

export const getProductsThunk = () => {
    return (dispatch) => {
        axios.get('/api/products')
            .then(response => response.data)
            .then(products => dispatch(getProductsAction(products)))
    }
}


export const getManagersThunk = () => {
    return (dispatch) => {
        axios.get('/api/managers')
        .then(response => response.data)
        .then(managers => dispatch(getManagersAction(managers)))
    }
}

export const postManagerIdThunk = (product) => {
    return (dispatch) => {
        return axios.put(`/api/products/${product}`)
            .then (() => console.log('thunk reached')
            // dispatch(getProductsThunk())
            )
    }
}

export const findManager = (products, managers) => {
    if (products.length && managers.length){
        const managerIds = products.reduce((acc, product) => {
            return acc.concat(product.managerId)
        }, [])
        
        return managers.filter(manager => managerIds.includes(manager.id))
    }
}

export const managerCount = () => {
    return findManager(initialState.products, initialState.users).length
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export default store
