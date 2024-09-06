
export const DO_FETCH_ROCK = 'DO_FETCH_ROCK'
export const DO_FETCH_POP = 'DO_FETCH_POP'
export const DO_FETCH_RAP = 'DO_FETCH_RAP'
export const SELECT_TRACK = 'SELECT_TRACK'

export const selectedTrack = (track) => ({
    type: SELECT_TRACK,
    payload: track
})

export const fillMusicSection = (artistName, genre) => {
    return (dispatch) => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('errore nella chiamata')
                }
            })
            .then((track) => {
                console.log('sei dentro a data')
                dispatch({
                    type: genre,
                    payload: track
                })

            })
            .catch((err) => {
                console.log('Il tuo errore', err)
            })
    }

}