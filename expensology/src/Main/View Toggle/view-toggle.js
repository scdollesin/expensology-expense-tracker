import './view-toggle.css';
import { useState } from "react";

function ViewToggle() {
    const [activeView, setActiveView] = useState("list");   //NOTE: The default view mode is List View

    return (
        <div className="View-toggle">
            <button
                type='button'
                className={`View-option ${activeView === "list" ? "active" : "inactive"}`}      //Changes the List View button's style to active when clicked
                onClick={() => setActiveView("list")}>
                List View
            </button>
            <button
                type='button'
                className={`View-option ${activeView === "weekly" ? "active" : "inactive"}`}    //Likewise, changes the Weekly Summary button's style to active when clicked
                onClick={() => setActiveView("weekly")}>                    
                Weekly Summary
            </button>
        </div>
    );
}

export default ViewToggle;