
import Header from './components/Header';
import Ratings from './components/Ratings';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <section className="main-view-wrapper">
          <div className="container">

            <Ratings />

          </div>
        </section>

        <Results />

      </main>

      <Footer />

    </div>
  );
}

export default App;
