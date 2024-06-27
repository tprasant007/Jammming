import TrackList from "../TrackList/TrackList";
import styles from "./DisplaySearchResult.module.css"

const DisplaySearchResult = (props) => {
    
    return (
        <div className={styles.searchResult}>
            <TrackList searchResults={props.searchResults} onAdd={props.onAdd}/>
        </div>
     );
}
 
export default DisplaySearchResult;