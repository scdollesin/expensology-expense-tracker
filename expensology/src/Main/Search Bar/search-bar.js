import './search-bar.css';
import { GrSearch } from "react-icons/gr";

function Searchbar({onSearch}) {
    return (
        <div className="Search-bar">
            <GrSearch className="Search-icon"/>
            <input
                className="Search-input"
                type='text'
                placeholder='Search descriptions...'
                onChange={(e) => onSearch(e.target.value)}      // Passes the input value to Main
            />
        </div>
    );
}

export default Searchbar;