import React from 'react';
import Person from './Person';
import Film from './Film'

function PeopleList (props) {
    const conclusion = props.people.map((person) => {
        return (<Film key = {person.id} render={person} />)
    })
    return (
        <div>
            {conclusion};
        </div>
    )
}
    
export default PeopleList