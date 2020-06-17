import {combineReducers} from 'redux';

const songReducer=()=>{
    return[
        {title:'Leekan' ,Duration:'3:00'},
        {title:'Ehd-e-Wafa' ,Duration:'2:55'},
        {title:'Pervaz Hai Junoon' ,Duration:'3:50'},
       
        {title:'NFAK' ,Duration:'2:21'}
    ];

}


const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs:songReducer,
    selectedSongReducer:selectedSongReducer
});