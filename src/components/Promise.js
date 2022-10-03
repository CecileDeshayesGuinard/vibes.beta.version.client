function Promise (){

    return (
        <div className="promise">
          <h2>Bienvenue chez Vibes</h2>
          <h3>L'application qui te permets<br />de créer tes évènements</h3>
          <table className="loadingAddValue">
            <tbody>
              <tr>
                <td><img className="loadingPic" src="/map-location-svgrepo-com.svg" alt="calendar" /></td>
                <td><p>Localise</p></td>
              </tr>
              <tr>
                <td><img className="loadingPic" src="/calendar-svgrepo-com.svg" alt="calendar" /></td>
                <td><p>Organise</p></td>
              </tr>
              <tr>
                <td><img className="loadingPic" src="/party-svgrepo-com.svg" alt="fest" /></td>
                <td><p>Invite</p></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Promise;