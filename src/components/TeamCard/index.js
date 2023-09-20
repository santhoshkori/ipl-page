import './index.css'
import {Link} from 'react-router-dom'

const Teamcard = props => {
  const {Myteamdetails} = props
  const {id, name, teamImageUrl} = Myteamdetails
  return (
    <Link className="linksty" to={`/team-matches/${id}`}>
      <li className="listty">
        <div className="teamcardbgcontainer">
          <img src={teamImageUrl} alt={`${name}`} className="teamcardimgpx" />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default Teamcard
