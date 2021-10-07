import './App.css';
import {SearchBar} from "../SearchBar/SearchBar.js";
import {SearchResults} from "../SearchResults/SearchResults.js";
import {Playlist} from '../Playlist/Playlist.js';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchResults : [], playlistName: 'test', playlistTracks: [{name: 'name', album: 'album', id: '1', artist: 'artist'}]};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }


  addTrack(track){
    for(let i of this.state.playlistTracks){
      if(i.id!==track.id){
        let playlist = this.state.playlistTracks
        playlist.push(track)
        this.setState({playlistTracks : Playlist})
      }
    }
  }

  removeTrack(track){
    let playlist = this.state.playlistTracks.filter(song => song.id !== track.id);
    this.setState({playlistTracks : playlist});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    let trakURIs = this.state.playlistTracks;
  }

  search(term){
    console.log(term);
  }


  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
              <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} 
              playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

