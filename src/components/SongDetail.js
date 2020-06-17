import React from 'react';
import {connect} from 'react-redux';



const SongDetail=({song})=>{
    if(!song){
        return <div>Select a Song</div>;
    }
    return(
        <div>
        <h3>Details For</h3>
        <p>{song.title}</p>
        <p>{song.Duration}</p>
        </div>
    );
};




const mapStateToProps=state=>{
  
    return {
        song:state.selectedSongReducer
    }
}



export default connect(mapStateToProps)(SongDetail);