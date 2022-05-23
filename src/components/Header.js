export default function Header() {

  return (
    <header>
      <div className="container navbar">
        <div className="brand">
          <h1><a href="./">Arpadio</a></h1>
        </div>
        <div>
          <button className="btn small-btn" id="resetButton">Reset</button>
        </div>
      </div>
    </header>
  )
}
