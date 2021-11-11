import React, { Component } from "react";
import './FilteredList.css';
import Filters from './Filters';
import List from './List';
import uniqueId from 'lodash.uniqueid';



class FilteredList extends Component {

    constructor(props) {
        super(props)

        // this.id = uniqueId('prefix')
        // console.log(this.id)
        // this.id = newId();



        const list = [
            { name: `Urszula`, lastname: `Jeziorna`, id: uniqueId('prefix'),},
            { name: `Krystian`, lastname: `Dziopa`, id: uniqueId('prefix') },
            { name: `Łukasz`, lastname: `Badocha`, id: uniqueId('prefix') },
            { name: `Łukasz`, lastname: `Misiura`, id: uniqueId('prefix') },
            { name: `Ewa`, lastname: `Drozd`, id: uniqueId('prefix') },
            { name: `Marcin`, lastname: `Misiura`, id: uniqueId('prefix') },
            { name: `Monika`, lastname: `Misiura`, id: uniqueId('prefix') }
        ];


        list.forEach((employee) => {
            // console.log(employee);
            // console.log(employee.name);

            let employeeName = employee.name;

            if (employeeName.charAt(employeeName.length - 1) === `a`) {
                employee.sex = `female`;
            } else {
                employee.sex = `male`;
            }

        })


        console.log(list);



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





