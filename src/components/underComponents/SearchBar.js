function SearchBar(props) {
  
  return (
    <div>
      <h3>Rechercher un contact</h3>
      <input type="text" value={props.search} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  );
}
  
export default SearchBar;