import { combineReducers, configureStore } from '@reduxjs/toolkit'
import fetchRedux from '../reducers/fetch';
import selectedTrack from '../reducers/selectTrack';
import favoritesRedux from '../reducers/favorites';

const mainReducers = combineReducers({
    singleArtist: fetchRedux,
    track: selectedTrack,
    liked: favoritesRedux
})

const store = configureStore({
    reducer: mainReducers,

})

export default store;