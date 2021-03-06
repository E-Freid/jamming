import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

export class TrackList extends React.Component{
    render(){
        return (
        <div className="TrackList">
        {this.state.tracks.map(track => ( <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={track.id}/>))}
        </div>
    )
    }
}