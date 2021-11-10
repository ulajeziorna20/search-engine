import React from "react";
import './List.css';


function List(props) {


   
    const liItems = (array) => {

        array.map((element, index) => {
            // console.log(element.lastname);
            // console.log(element.name);
    
            return <li key={Date.now() + index}>{element.name + ' '}{element.lastname}</li>
        })

    } 


    return (
        <div>
            <ul className="users-list">
                {liItems(props.listToDisplay)}
            </ul>
        </div>
    )
}



export default List;