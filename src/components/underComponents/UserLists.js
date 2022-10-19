function UserLists (props) {

    return (
      <div>
        <h3>Mes Listes</h3>
        <button className="button buttonsWhite" onChange={props.onChange}>Contacts</button>
      </div>
    )
}

export default UserLists;