import React, {Component} from 'react'
import FilmList from '../components/FilmList'

class Film extends Component {
    constructor(props) {
        super(props) 
            this.state = {films: []}
    } 

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com')
        .then((response) => {
            return response.json()
            .then((films) => {
                this.setState({
                    films
                })
            })
        })
    }
    render() {
        return <FilmList films = {this.state.Films} />
    }
}

export default Film


