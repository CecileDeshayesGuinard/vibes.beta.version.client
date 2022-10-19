function Avatar(props) {

  return (
    <div className="avatarBlock">
      <img className="avatar" name="userPhoto" type="image" src={props.userPhoto} alt="Avatar" />
      <h4>{props.userName}</h4>
    </div>
  );
    
  }
    
  export default Avatar;