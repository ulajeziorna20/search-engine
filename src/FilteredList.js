import React, { Component } from "react";
import './FilteredList.css';
import Filters from './Filters';
import List from './List';



class FilteredList extends Component {

    constructor(props) {
        super(props)

        const list = [
            {name: `Urszula`, lastname: `Jeziorna`},
            {name: `Krystian`, lastname: `Dziopa`},
            {name: `Łukasz`, lastname: `Badocha`},
            {name: `Łukasz`, lastname: `Misiura`},
            {name: `Ewa`, lastname: `Drozd`},
            {name: `Marcin`, lastname: `Misiura`},
            {name: `Monika`, lastname: `Misiura`}
        ];

        this.state = {
            inputValue: '',
            list: list,
            filteredList: list,
        }
    }



    handleChange = (e) => {


        


        this.setState({
            inputValue: e.target.value
        })
    }









    render() {




        return (
            <div>
                <Filters usersString={this.state.inputValue}
                stringIntroduction={this.handleChange}/>
                <List listToDisplay={this.state.filteredList}/>

            </div>
        )
    }

}



export default FilteredList;





