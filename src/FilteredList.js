import React, { Component } from "react";
import './FilteredList.css';
import Filters from './Filters';
import List from './List';



class FilteredList extends Component {

    constructor(props) {
        super(props)

        const list = [
            { name: `Urszula`, lastname: `Jeziorna` },
            { name: `Krystian`, lastname: `Dziopa` },
            { name: `Łukasz`, lastname: `Badocha` },
            { name: `Łukasz`, lastname: `Misiura` },
            { name: `Ewa`, lastname: `Drozd` },
            { name: `Marcin`, lastname: `Misiura` },
            { name: `Monika`, lastname: `Misiura` }
        ];



        this.state = {
            inputValue: '',
            list: list,
            filteredList: [] //nie działało gdy wartością był obiekt list?
        }
    }



    handleChange = (e) => {

        // console.log(e);


        let listToFilter = this.state.list;
        let searchString = e.target.value.toLowerCase();
        let filteredElements = [];


        const asArray = Object.entries(listToFilter);

        const filtered = asArray.filter(([key, element]) => {

            // console.log(key);
            // console.log(element);

            if ((element.name.toLowerCase().includes(searchString)) || (element.lastname.toLowerCase().includes(searchString))) {

                filteredElements.push(element)


            }


        })

        // const justStrings = Object.fromEntries(filteredElements);
        // console.log(justStrings);




        this.setState({
            inputValue: e.target.value,
            // filteredList: filteredElements
        })
    }









    render() {




        return (
            <div>
                <Filters usersString={this.state.inputValue}
                    stringIntroduction={this.handleChange} />
                <List listToDisplay={this.state.filteredList} />

            </div>
        )
    }

}



export default FilteredList;





