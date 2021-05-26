 const SearchForm = props => {
  return (
  <div>
    <form>
      <input value={props.value} onChange={(e) => props.handleInputChange(e.target.value)} />
      <button onClick={() => props.handleSearch()}>Search</button>
    </form>
  </div>
)}
export default SearchForm;