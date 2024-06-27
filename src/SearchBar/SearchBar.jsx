import { useState } from "react";
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
    const [inputData, setInputData] = useState({
        track : ""
      })
      function handleChange(e) {
        setInputData(prev => {
          return {
            ...prev,
            [e.target.name] : e.target.value
          }
        })
      }
    return ( 
        <div className={styles.searchBarContainer}>
            <input type="text" onChange={handleChange} name="track" value={inputData.track}/>
            <button className="search-btn" onClick={()=> props.onSearch(inputData.track)}>SEARCH</button>
        </div>
     );
}
 
export default SearchBar;