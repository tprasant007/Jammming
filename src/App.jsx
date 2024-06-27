import { useState } from "react";

import Spotify from "./Spotify";
import SearchBar from "./SearchBar/SearchBar";

import DisplaySearchResult from "./DisplaySearchResult/DisplaySearchResults";
import Playlist from "./Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlayListName] = useState("New Playlist")

  function handleChange(e){
    setPlayListName(e.target.value)
  }

  function onSearch(searchInput) {
    Spotify.getAccessToken();
    Spotify.searchTracks(searchInput).then((data) => setSearchResults(data));
  }

  // This function is onclick event listener for + button which saves the track object to playlistTracks array.
  function onAddToPlaylist(trackId) {
    const clickedTrack = searchResults.find((result) => trackId === result.id);
    setPlaylistTracks((prev) => [clickedTrack, ...prev]);
  }

  // This is to remove tracks when clicking - button from playlist.
  function onRemoval(trackId) {
    const newPlaylistArray = playlistTracks.filter(
      (track) => track.id !== trackId
    );
    setPlaylistTracks(newPlaylistArray);
  }

  function saveToPlaylist(){
    const uriArr = playlistTracks.map(track => track.uri)

    Spotify.savePlaylist(playlistName, uriArr)
    setPlaylistTracks([])
    setPlayListName("New Playlist")
  }

  return (
    <>
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main>
        <SearchBar onSearch={onSearch} />
        <div className="containers">
          <DisplaySearchResult
            searchResults={searchResults}
            onAdd={onAddToPlaylist}
          />
          <Playlist 
          playlistTracks={playlistTracks}
          onChange={handleChange} 
          onRemoval={onRemoval} 
          onClick={saveToPlaylist}
          playlistName={playlistName}/>
        </div>
      </main>
    </>
  );
}

export default App;
