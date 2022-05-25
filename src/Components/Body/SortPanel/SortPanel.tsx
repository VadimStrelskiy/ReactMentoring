import './SortPanel.scss'

const sortOptions = ['RELEASE DATE', 'TITLE'];

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