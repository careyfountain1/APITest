import React, {Component} from 'react'
import PeopleList from '../components/PeopleList'

class People extends Component {
    constructor(props) {
        super(props) 
            this.state = {people: []}
    } 

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com')
        .then((response) => {
            return response.json()
            .then((people) => {
                this.setState({
                    people
                })
            })
        })
    }
    render() {
        return <PeopleList people = {this.state.people} />
    }
}


export default People