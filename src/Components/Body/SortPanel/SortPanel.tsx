/* eslint-disable no-unused-vars */

import {getMovies, setSortBy, useAppDispatch} from '../../../Store/movieReducer';
import {SortOptionType} from '../../App';
import './SortPanel.scss';

export interface SortOption{
  value: SortOptionType,
  label: string
}

const sortOptions : SortOption[] =
[
  {
    value: SortOptionType.ReleaseDateAsc,
    label: 'RELEASE DATE ASC',
  },
  {
    value: SortOptionType.ReleaseDateDesc,
    label: 'RELEASE DATE DESC',
  },
  {
    value: SortOptionType.RatingAsc,
    label: 'RATING ASC',
  },
  {
    value: SortOptionType.RatingDesc,
    label: 'RATING DESC',
  },
];

export function SortPanel() {

  const dispatch = useAppDispatch();

  function sortByChanged(sortBy : SortOptionType){
    dispatch(setSortBy(sortBy));
    dispatch(getMovies());
  }

  return (<div className='sort-panel'>
    <label>SORT BY</label>
    <select onChange={(e) => sortByChanged(+e.target.value)}>
      {
        sortOptions.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>,
        )
      }
    </select>
  </div>);
}
