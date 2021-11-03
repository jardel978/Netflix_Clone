import './FeatureMovie.css';
import React from 'react'

export const FeatureMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.lenght > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className="section__feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature-vertical">
                <div className="feature-horizontal">
                    <div className="feature__item-name">{item.original_name}</div>
                    <div className="feature__item-info">
                        <div className="feature__item-points">{item.vote_average} pontos</div>
                        <div className="feature__item-year">{firstDate.getFullYear()}</div>
                        <div className="feature__item-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="feature__item-description">{description}</div>
                        <div className="feature__item-genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                        <div className="feature__item-buttons">
                            <a className="feature__item-buttons-one" href={`/watch/${item.id}`}>► Assistir</a>
                            <a className="feature__item-buttons-two" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
