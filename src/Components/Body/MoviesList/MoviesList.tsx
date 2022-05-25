import './MoviesList.scss'

function SortPanel() {
  return(<div className='sort-panel'>
      <label>SORT BY</label>
      <select>
        {
          sortOptions.map((i) =>
            <option>{i}</option>
          )
        }
      </select>
  </div>)
}

export default SortPanel;