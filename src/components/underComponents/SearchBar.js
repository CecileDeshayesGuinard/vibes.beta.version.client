function SearchBar(props) {

  function handleChangeSearch(event) {
    const newVal = event.target.value
    props.setSearch(newVal)
  }
  
  return (
    <div>
      <label>Barre de recherche</label>
      <input value={props.search} type="text" onChange={handleChangeSearch} />
    </div>
  );
}
  
export default SearchBar;