import { SEARCH } from "../actions";

const initialState = {
    result: '',
    showResults: false
}

const searchRedux = (state = initialState, action) => {
    switch (action.type) {

        case SEARCH: {
            return {
                ...state,
                result: action.payload,
                showResults: true
            }
        }

        default: {
            return state
        }
    }


}

export default searchRedux;