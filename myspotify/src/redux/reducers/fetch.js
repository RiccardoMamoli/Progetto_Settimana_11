import { DO_FETCH_ROCK, DO_FETCH_POP, DO_FETCH_RAP } from "../actions";

const initialState = {
    rock: [],
    pop: [],
    rap: []
}

const fetchRedux = (state = initialState, action) => {

    switch (action.type) {

        case DO_FETCH_ROCK: {
            return {
                ...state,
                rock: action.payload.data
            }
        }

        case DO_FETCH_RAP: {
            return {
                ...state,
                rap: action.payload.data
            }
        }

        case DO_FETCH_POP: {
            return {
                ...state,
                pop: action.payload.data
            }
        }


        default: {
            return state
        }
    }
}

export default fetchRedux;