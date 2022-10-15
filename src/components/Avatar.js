import UserAvatar from './underComponents/UserAvatar'

function Avatar() {

    const avatarStyle = {
        type: "small"
      }

    return (
      <div className="avatarBlock">
        <UserAvatar style={avatarStyle} />
        <h2>Pseudo</h2>
      </div>

    );
    
  }
    
  export default Avatar;