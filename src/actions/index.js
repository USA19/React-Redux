//action_creator

export const selectSong=song=>{
    //returns an object (action)
    return{
        type:'SONG_SELECTED',
        payload:song
    };
}