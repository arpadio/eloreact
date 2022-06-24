
export default function Footer() {

  return (
    <footer>
      <div className="container flexbox">
        <div className="flex-half">
          <p className="quote-text">"The process of rating players can be compared to the measurement of the position of a cork, bobbing up and down on the surface of agitated water, with a yard stick tied to a rope and which is swaying in the wind."</p>
          <p>Arpad Elo</p>
        </div>
        <div className="credits">
          <p>By <a href="https://sjam.studio" target="_blank" rel="noreferrer">Sam Mead</a> and <a href="https://anthonyhobday.com/" target="_blank" rel="noreferrer">Anthony Hobday</a>, with thanks to <a href="https://metinmediamath.wordpress.com/" target="_blank" rel="noreferrer">Metin Bektas</a>.
          <br/>
          Read more <a href="https://github.com/arpadio/eloRatingApp" target="_blank" rel="noreferrer">about this app</a>.</p>
        </div>
      </div>
    </footer>
  )
}
