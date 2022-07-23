/* eslint-disable no-unused-vars */
import {useEffect, useRef, useState} from 'react';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';
import styles from './SortPanel.module.scss';
import { useRouter } from 'next/router';

export interface SortOption{
  value: SortOptionType,
  label: string
}

enum SortOptionType {
  ReleaseDateAsc = 1,
  ReleaseDateDesc = 2,
  RatingAsc = 3,
  RatingDesc = 4
};

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
  const router = useRouter();
  const {searchQuery} = router.query;
  
  const mounted = useRef(null);

  let parsedSortOption;

  const sortBy = router.query.sortBy;
  const sortOrder = router.query.sortOrder;

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
        router.query.sortOrder = 'asc';
        router.query.sortBy = 'vote_average';
        break;
      case SortOptionType.RatingDesc:
        router.query.sortOrder = 'desc';
        router.query.sortBy = 'vote_average';
        break;
      case SortOptionType.ReleaseDateAsc:
        router.query.sortOrder = 'asc';
        router.query.sortBy = 'release_date';
        break;
      case SortOptionType.ReleaseDateDesc:
        router.query.sortOrder = 'desc';
        router.query.sortBy = 'release_date';
        break;
    }

    navigate(searchQuery, router.query);
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (router.query && parsedSortOption) {
        setSortOption(defaultSort);
      }
    }
  }, [router.query]);


  return (<div className={styles.sortPanel}>
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
