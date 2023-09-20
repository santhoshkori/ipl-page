import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Teamcard from '../TeamCard'

class Home extends Component {
  state = {iplteams: [], isspinnerrunning: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const Data = await response.json()

    const updatedIplteamsdata = Data.teams.map(eachiplteam => ({
      id: eachiplteam.id,
      name: eachiplteam.name,
      teamImageUrl: eachiplteam.team_image_url,
    }))
    console.log(Data)
    this.setState({iplteams: updatedIplteamsdata, isspinnerrunning: false})
  }

  render() {
    const {iplteams, isspinnerrunning} = this.state
    return (
      <Link to="/home">
        <div className="bgcontainer">
          <div className="logoheadingcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logoimgpx"
            />
            <h1>IPL Dashboard</h1>
          </div>
          <div className="teamcardcontainer">
            {isspinnerrunning ? (
              <div>
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              iplteams.map(eachteamcard => (
                <Teamcard Myteamdetails={eachteamcard} key={eachteamcard.id} />
              ))
            )}
          </div>
        </div>
      </Link>
    )
  }
}
export default Home
