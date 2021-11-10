import React from "react";
import './Filters.css';



function Filters(props) {



    return (

        <div className="main-div-search">
            <div className="header-list">
                <h2 >User's List</h2>
            </div>
            <div className="div-search-input">
                <input type="text" name="search-input" id="serach-input" value={props.usersString} onChange={props.stringIntroduction} placeholder="Find employee..."></input>
            </div>

        </div>
    )
}


export default Filters;