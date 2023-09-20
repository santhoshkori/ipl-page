import './index.css'

const Matchcard = props => {
  const {matchdet} = props
  const {result, status, team, imgUrl} = matchdet

  const iswon = status === 'Won' ? 'green' : 'red'
  console.log(iswon)

  return (
    <li className="listty">
      <div className="matchcardcontainer">
        <img
          src={imgUrl}
          className="matchcardimgsty"
          alt={`competing team ${team}`}
        />
        <p>{team}</p>
        <p>{result}</p>
        <p className={iswon}>{status}</p>
      </div>
    </li>
  )
}

export default Matchcard
