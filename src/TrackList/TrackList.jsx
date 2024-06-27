import styles from "./TrackList.module.css"

const TrackList = (props) => {
    const tracksDisplay = props.searchResults.map(track => {
        return (
            <div className={styles.tracksList} key={track.id}>
                <div className={styles.trackInfo}>
                    <h2>{track.name}</h2>
                    <p>{`${track.artist} | ${track.album}`}</p>
                </div>
                <button className={styles.addBtn} onClick={()=> props.onAdd(track.id)}>+</button>
            </div>
        )
    })
    return ( 
        <>
            {tracksDisplay}
        </>
     );
}
 
export default TrackList;