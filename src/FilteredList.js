import React, { Component } from "react";
import './FilteredList.css';
import Filters from './Filters';
import List from './List';
import uniqueId from 'lodash.uniqueid';
// import './lodash';


class FilteredList extends Component {

    constructor(props) {
        super(props)

        this.id = uniqueId(prefix)
        // this.id = newId();

        const list = [
            { name: `Urszula`, lastname: `Jeziorna`, id: this.id},
            { name: `Krystian`, lastname: `Dziopa`, id: this.id },
            { name: `Łukasz`, lastname: `Badocha`, id: this.id },
            { name: `Łukasz`, lastname: `Misiura`, id: this.id },
            { name: `Ewa`, lastname: `Drozd`, id: this.id },
            { name: `Marcin`, lastname: `Misiura`, id: this.id },
            { name: `Monika`, lastname: `Misiura`, id: this.id }
        ];



        this.state = {
            inputValue: '',
            list: list,
            filteredList: list //nie działało gdy wartością był obiekt list?
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
            filteredList: filteredElements
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





