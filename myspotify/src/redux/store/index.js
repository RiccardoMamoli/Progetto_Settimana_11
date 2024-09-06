import { combineReducers, configureStore } from '@reduxjs/toolkit'
import fetchRedux from '../reducers/fetch';
import selectedTrack from '../reducers/selectTrack';

const mainReducers = combineReducers({
    singleArtist: fetchRedux,
    track: selectedTrack
})

const store = configureStore({
    reducer: mainReducers,

})

export default store;