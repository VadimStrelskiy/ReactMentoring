/* eslint-disable no-unused-vars */

import {SortOptionType} from '../../App';
import {useEffect, useRef, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';
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
  const navigate = useNavigateMovie();

  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();

  const mounted = useRef(null);

  let parsedSortOption;

  const sortBy = searchParams.get('sortBy');
  const sortOrder = searchParams.get('sortOrder');
  if (sortBy && sortOrder) {
    if (sortBy == 'vote_average') {
      if (sortOrder == 'asc') {
        parsedSortOption = SortOptionType.RatingAsc;
      } else if (sortOrder == 'desc') {
        parsedSortOption = SortOptionType.RatingDesc;
      }
    } else if (sortBy == 'release_date') {
      if (sortOrder == 'asc') {
        parsedSortOption = SortOptionType.ReleaseDateAsc;
      } else if (sortOrder == 'desc') {
        parsedSortOption = SortOptionType.ReleaseDateDesc;
      }
    }
  }

  const defaultSort = parsedSortOption != null ? parsedSortOption : SortOptionType.RatingDesc;
  const [sortOption, setSortOption] = useState(defaultSort);

  function sortByChanged(sortBy : SortOptionType) {
    switch (sortBy) {
      case SortOptionType.RatingAsc:
        searchParams.set('sortOrder', 'asc');
        searchParams.set('sortBy', 'vote_average');
        break;
      case SortOptionType.RatingDesc:
        searchParams.set('sortOrder', 'desc');
        searchParams.set('sortBy', 'vote_average');
        break;
      case SortOptionType.ReleaseDateAsc:
        searchParams.set('sortOrder', 'asc');
        searchParams.set('sortBy', 'release_date');
        break;
      case SortOptionType.ReleaseDateDesc:
        searchParams.set('sortOrder', 'desc');
        searchParams.set('sortBy', 'release_date');
        break;
    }

    navigate(searchQuery, searchParams);
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (searchParams && parsedSortOption) {
        setSortOption(defaultSort);
      }
    }
  }, [searchParams]);


  return (<div className='sort-panel'>
    <label>SORT BY</label>
    <select onChange={(e) => sortByChanged(+e.target.value)} value={sortOption}>
      {
        sortOptions.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>,
        )
      }
    </select>
  </div>);
}
