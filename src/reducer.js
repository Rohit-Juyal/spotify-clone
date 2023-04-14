export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finish developing
    // token: 'BQB18Jlyk5hAL3nrl2_H967eBY9BiXUJjNJoNHdPWOh29hHrlU4GBNPpHl9OFQmDxe89nb_r7BFZ7ZMxDg3bjzawlKn99216GvPUjXjncNwp4fsOVuRatEBWs8othBNCTvu6B7agKU7aJ0HAUF-BaD-9btVBrktATxkoq-RQ26Ml0sjJSqNh3lPAIyn6rA8IIPST_L4z1Tn9c2hubQ'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        
        default:
            return state;
    }

}

export default reducer;