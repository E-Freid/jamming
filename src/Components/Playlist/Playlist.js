import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList.js';


export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    render(){
        return (
            <div class="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
                <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }

    handleNameChange(e){
        this.props.handleNameChange(e.target.value);
    }
}