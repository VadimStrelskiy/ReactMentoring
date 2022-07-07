/* eslint-disable no-unused-vars */

import { useMatch } from "react-router-dom";
import {SortOptionType} from '../../App';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
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
  const navigate = useNavigate();
    
  const match =  useMatch("search/:searchQuery");
  let sortBy = null;
  let sortOrder = null;
  const mounted = useRef(null);

  let parsedSortOption;
  if(match) {
    sortBy = new URLSearchParams(match.params.searchQuery).get('sortBy');
    sortOrder = new URLSearchParams(match.params.searchQuery).get('sortOrder');
    if(sortBy && sortOrder){
      if(sortBy == 'vote_average'){
        if(sortOrder == 'asc'){
          parsedSortOption = SortOptionType.RatingAsc;
        }
        else if(sortOrder == 'desc'){
          parsedSortOption = SortOptionType.RatingDesc;
        }
      }
      else if(sortBy == 'release_date'){
        if(sortOrder == 'asc'){
          parsedSortOption = SortOptionType.ReleaseDateAsc;
        }
        else if(sortOrder == 'desc'){
          parsedSortOption = SortOptionType.ReleaseDateDesc;
        }
      }
    }
  }

  const defaultSort = parsedSortOption != null ? parsedSortOption : SortOptionType.RatingDesc;
  const [sortOption, setSortOption] = useState(defaultSort);

  function sortByChanged(sortBy : SortOptionType) {
    let urlSearchParams;
    if(match){
      urlSearchParams = new URLSearchParams(match.params.searchQuery);
    }
    else{
      urlSearchParams = new URLSearchParams();
    }

    switch (sortBy) {
      case SortOptionType.RatingAsc:
        urlSearchParams.set('sortOrder', 'asc');
        urlSearchParams.set('sortBy', 'vote_average')
        break;
      case SortOptionType.RatingDesc:
        urlSearchParams.set('sortOrder', 'desc');
        urlSearchParams.set('sortBy', 'vote_average')
        break;
      case SortOptionType.ReleaseDateAsc:
        urlSearchParams.set('sortOrder', 'asc');
        urlSearchParams.set('sortBy', 'release_date')
        break;
      case SortOptionType.ReleaseDateDesc:
        urlSearchParams.set('sortOrder', 'desc');
        urlSearchParams.set('sortBy', 'release_date')
        break;
    }

    navigate('/search/' + urlSearchParams.toString());
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if(match && parsedSortOption){
        setSortOption(defaultSort);
      }
    }
  }, [match]);


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
