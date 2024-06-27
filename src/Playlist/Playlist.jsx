import styles from "./Playlist.module.css"

const Playlist = (props) => {
    const tracksDisplay = props.playlistTracks.map(track => {
        return (
            <div key={track.id} className={styles.trackContainer}>
                <div className={styles.trackInfo}>
                    <h2>{track.name}</h2>
                    <p>{`${track.artist} | ${track.album}`}</p>
                </div>
                    <button className={styles.removeBtn} onClick={()=> props.onRemoval(track.id)}>-</button>
            </div>
        )
    })
    return ( 
        <div className={styles.playlistContainer}>
            <input onChange={props.onChange} value={props.playlistName}/>
            {tracksDisplay}
            <button  className={styles.savePlaylistBtn} onClick={() => props.onClick()}>Save to spotify</button>
        </div>
     );
}
 
export default Playlist;