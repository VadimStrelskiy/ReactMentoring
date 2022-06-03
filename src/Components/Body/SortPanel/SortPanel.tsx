import './SortPanel.scss';

const sortOptions = ['RELEASE DATE', 'TITLE'];

export function SortPanel() {
  return (<div className='sort-panel'>
    <label>SORT BY</label>
    <select>
      {
        sortOptions.map((value) =>
          <option key={value}>{value}</option>,
        )
      }
    </select>
  </div>);
}
