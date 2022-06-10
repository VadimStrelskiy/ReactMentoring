import './SearchToggle.scss';
import {useContext} from 'react';
import {Context} from '../../App';

export function SearchToggle() {

    const searchClicked = useContext(Context).searchClicked;

    return (
        <button className='search-toggle' onClick={searchClicked}>
            <svg>
                <circle cx="18" cy="11" r="10" fill="transparent" stroke ="#F65261" stroke-width="3"/>
                <line x1="0" y1="30" x2="11" y2="19" stroke="#F65261" stroke-width="3"/>
            </svg>
        </button>
    );
}
