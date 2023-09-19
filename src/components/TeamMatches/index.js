import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Latestmatc from '../LatestMatch'
import Matchcard from '../MatchCard'

class Teammatches extends Component {
  state = {
    bannerimg: {},
    idteamcolor: '',
    latesetmatchdetails: {},
    recentmatchdetails: [],
    isloding: true,
  }

  componentDidMount() {
    this.getteammatches()
  }

  getteammatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatabannerimg = {
      teamBannerUrl: data.team_banner_url,
    }
    const updatedlatestmatchdetails = data.latest_match_details
    const camelcaseupdatedmatchdetails = {
      competingTeam: updatedlatestmatchdetails.competing_team,
      competatingTeamLogo: updatedlatestmatchdetails.competing_team_logo,
      date: updatedlatestmatchdetails.date,
      firstInnings: updatedlatestmatchdetails.first_innings,
      id: updatedlatestmatchdetails.id,
      manOfTheMatch: updatedlatestmatchdetails.man_of_the_match,
      matchStatus: updatedlatestmatchdetails.match_status,
      secondInnings: updatedlatestmatchdetails.second_innings,
      result: updatedlatestmatchdetails.result,
      venue: updatedlatestmatchdetails.venue,
      umpires: updatedlatestmatchdetails.umpires,
    }

    const recentsnakecase = data.recent_matches

    const updatedpascalcaserecentmatches = recentsnakecase.map(eachrec => ({
      imgUrl: eachrec.competing_team_logo,
      team: eachrec.competing_team,
      result: eachrec.result,
      status: eachrec.match_status,
      id: eachrec.id,
    }))
    console.log(updatedpascalcaserecentmatches)

    this.setState({
      bannerimg: updatabannerimg,
      idteamcolor: id,
      latesetmatchdetails: camelcaseupdatedmatchdetails,
      recentmatchdetails: updatedpascalcaserecentmatches,
      isloding: false,
    })
  }

  render() {
    const {
      bannerimg,
      idteamcolor,
      latesetmatchdetails,
      recentmatchdetails,
      isloding,
    } = this.state
    const {teamBannerUrl} = bannerimg

    return (
      <div className={`bgcontainerteammatches ${idteamcolor}`}>
        <img src={teamBannerUrl} />
        <p>Latest Matches</p>
        <Latestmatc matchdet={latesetmatchdetails} />
        <div className="recectmatchcardcontainer">
          {isloding ? (
            <div>
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            recentmatchdetails.map(eachmatchdet => (
              <Matchcard matchdet={eachmatchdet} key={eachmatchdet.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Teammatches
