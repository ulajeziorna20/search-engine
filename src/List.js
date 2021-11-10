import React from "react";
import './List.css';


function List(props) {



     


    return (
        <div>
            <ul className="users-list">
                {props.listToDisplay}
            </ul>
        </div>
    )
}



export default List;