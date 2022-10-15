function UserAvatar(props) {


    return (
      <div>
        <input className={`avatar ${props.style.type}`} name="userPhoto" type="image" id="avatar" alt="Avatar" />
      </div>
    )
}

export default UserAvatar;


