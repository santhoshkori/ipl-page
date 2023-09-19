import './index.css'
import {Link} from 'react-router-dom'

const Teamcard = props => {
  const {Myteamdetails} = props
  const {id, name, teamImageUrl} = Myteamdetails
  return (
    <Link className="linksty" to={`/team-matches/${id}`}>
      <div className="teamcardbgcontainer">
        <img src={teamImageUrl} alt={name} className="teamcardimgpx" />
        <h1>{name}</h1>
      </div>
    </Link>
  )
}

export default Teamcard
