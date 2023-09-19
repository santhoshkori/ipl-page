import './index.css'

const Matchcard = props => {
  const {matchdet} = props
  const {result, status, team, imgUrl} = matchdet
  console.log(matchdet)

  return (
    <div className="matchcardcontainer">
      <img src={imgUrl} className="matchcardimgsty" />
      <h1>{team}</h1>
      <p>{result}</p>
    </div>
  )
}

export default Matchcard
