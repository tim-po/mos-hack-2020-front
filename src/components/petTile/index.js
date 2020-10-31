import React from 'react';

import dog from '../img/dog.svg';
import sex from '../img/sex.svg';
import sobaka from '../img/sobaka.png';

import './petTile.scss';

const petTile = ( props ) => {
    return (
        <div className={"card"}>
            <img className={"card_photo"} src={sobaka} alt={""}/>
            {props.isStuff ? 
            <div className={"animal_type"}>
                <img className={"type_img"} src={dog} alt={""}></img>
                <div className={"type_text"}>Печенька, 4</div>
            </div> : null
            }
            <div className={"animal_sex"}>
                <img src={sex} alt={""}></img>
            </div>
            {props.isStuff ?[
            <button className={"card_button_left"}>Забрать домой</button>,
            <button className={"card_button_right"}>В избранное</button> 
            ]
            :
            <div className={"stuff_info"}>
                <div className={"stuff_text"}>Печенька, id:456789</div>
            </div>
            }
        </div>
    )
}

export default petTile;