import { SELECT_TRACK } from "../actions"


const initialState = {
    selected: null
}

const selectedTrack = (state = initialState, action) => {
    switch(action.type) {

        case SELECT_TRACK: {
            return{
                ...state,
                selected: action.payload
            }
        }

        default: {
            return state
        }
    }
}
export default selectedTrack;