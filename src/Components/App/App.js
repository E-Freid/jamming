import './App.css';
import {SearchBar} from "../SearchBar/SearchBar.js";
import {SearchResults} from "../SearchResults/SearchResults.js";
import {Playlist} from '../Playlist/Playlist.js';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {searchResults : [], playlistName: 'test', playlistTracks: [{name: 'name', album: 'album', id: '1', artist: 'artist'}]};
    }
    render(){
      return(
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
               <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
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
}

export default App;

