import './index.css'

const Latestmatc = props => {
  const {matchdet} = props
  const {
    competingTeam,
    competatingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    secondInnings,
    result,
    venue,
    umpires,
  } = matchdet

  return (
    <div className="latestmatchdetailcontainer">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competatingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competteamlogopx"
        />
      </div>
      <div className="firstsecondinnngscontainer">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default Latestmatc
