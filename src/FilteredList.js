import React, { Component } from "react";
import './FilteredList.css';
import Filters from './Filters';
import List from './List';
import uniqueId from 'lodash.uniqueid';



class FilteredList extends Component {

    constructor(props) {
        super(props)

        // console.log(uniqueId);
        // console.log(uniqueId('pl'));
        // console.log(uniqueId('com'));


        // this.id = uniqueId('prefix')
        // console.log(this.id)
        // this.id = newId();



        const list = [
            { name: `Urszula`, lastname: `Jeziorna`, id: uniqueId('prefix'), },
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


        // console.log(list);



        this.state = {
            inputValue: '',
            list: list,
            filteredList: list,
            checkSexWoman: false,
            checkSexMan: false
        }
    }



    handleCheckBoxWoman = (event) => {


        // console.log(`checkbox!`);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.checked);

        let checked = this.state.checkSexWoman
        // console.log(event.target.checked);

        checked = !checked
        console.log(checked);

        this.setState({
            checkSexWoman: checked
        })

    }




    handleCheckBoxMan = (event) => {


        // console.log(`checkbox!`);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.checked);

        let checked = this.state.checkSexMan
        // console.log(checked);

        checked = !checked
        console.log(checked);

        this.setState({
            checkSexMan: checked
        })

    }








    handleChange = (e) => {

        // console.log(e);


        let listToFilter = this.state.list;
        // console.log(listToFilter);
        let searchString = e.target.value.toLowerCase();
        // console.log(searchString);



        let sexWoman = this.state.checkSexWoman;
        let sexMan = this.state.checkSexMan;
        // console.log(sexWoman);
        // console.log(sexMan);




        if ((sexWoman === true) && (sexMan === true)) {

            listToFilter = this.state.list

        } else if ((sexWoman === true) && (sexMan === false)) {

            listToFilter = listToFilter.filter((person) => {

                return (person.sex === `female`)
            })

        } else {

            listToFilter = listToFilter.filter((person) => {

                return (person.sex === `male`)
            })

        }



        console.log(listToFilter);



        let filteredEmployees = listToFilter.filter((employee) => {

            //    console.log(employee);
            //    console.log(employee.name);

            if ((employee.name.toLowerCase().includes(searchString)) || (employee.lastname.toLowerCase().includes(searchString))) {

                return employee
            }
        })


        console.log(filteredEmployees);




        this.setState({
            inputValue: e.target.value,
            filteredList: filteredEmployees
        })
    }








    render() {




        return (
            <div>
                <Filters usersString={this.state.inputValue}
                    stringIntroduction={this.handleChange}
                    changeBoxWoman={this.handleCheckBoxWoman}
                    changeBoxMan={this.handleCheckBoxMan}
                    checkOptionWoman={this.state.checkSexWoman} checkOptionMan={this.state.checkSexMan} />
                <List listToDisplay={this.state.filteredList} />

            </div>
        )
    }

}



export default FilteredList;





