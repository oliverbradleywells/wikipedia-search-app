function SearchBar(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchData();
      }}>

        <input
          name="searchBar"
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>


      {/* <button type="submit" onClick={() => props.setOffSet(props.offset -10) }>Previous</button>

      <button type="submit" onClick={() => props.setOffSet(props.offset +10) }>Next</button>
      */}
    </div>
  )
}

export default SearchBar;