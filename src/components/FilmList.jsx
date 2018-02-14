import React from 'react';
import Film from './Film';

function FilmList (props) {
    const conclusion = props.films.map((film) => {
        return (<Film key = {film.id} render={film} />)
    })

    return (
        <div>
            {conclusion};
        </div>
    )
}
    
export default FilmList
