import './search-bar.css';
import { GrSearch } from "react-icons/gr";

function Searchbar() {
    return (
        <div className="Search-bar">
            <GrSearch className="Search-icon"/>
            <input className="Search-input" type='text' placeholder='Search descriptions...'/>
      </div>
    );
}

export default Searchbar;