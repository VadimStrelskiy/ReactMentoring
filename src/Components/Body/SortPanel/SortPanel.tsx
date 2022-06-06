/* eslint-disable no-unused-vars */

import './SortPanel.scss';

export enum SortOptionType {
  ReleaseDateAsc,
  ReleaseDateDesc,
  TitleAsc,
  TitleDesc
};


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
    value: SortOptionType.TitleAsc,
    label: 'TITLE ASC',
  },
  {
    value: SortOptionType.TitleDesc,
    label: 'TITLE DESC',
  },
];

export interface SortPanelProps{
  onValueChanged: (option: SortOptionType) => void
}

export function SortPanel({onValueChanged} : SortPanelProps) {
  return (<div className='sort-panel'>
    <label>SORT BY</label>
    <select onChange={(e) => onValueChanged(+e.target.value)}>
      {
        sortOptions.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>,
        )
      }
    </select>
  </div>);
}
