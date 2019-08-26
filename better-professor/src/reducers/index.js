import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions'

export const initialState = {
    isRegistering: false,
    isRegisterd: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return{
                ...state,
                isRegistering: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isRegisterd: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            }
        default:
            return state;
    }
}

    