import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useState } from 'react'

export const MovieRow = ({title, items}) => {

    const [scrollX, setsScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0) {
            x = 0;
        }
        setsScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x)
            x = (window.innerWidth - listW) - 60;
        
        setsScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow__icon-left" onClick={handleLeftArrow}> 
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow__icon-right" onClick={handleRightArrow}> 
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow__list-area">
                <div className="movieRow__list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow__list-item">
                            <img loading="lazy" key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
