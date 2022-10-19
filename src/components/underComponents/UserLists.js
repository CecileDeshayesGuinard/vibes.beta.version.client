function UserLists (props) {

    return (
      <div>
        <button className="button buttonsWhite" onChange={props.onChange}>{props.name}</button>
      </div>
    )
}

export default UserLists;