import './App.css';
import dictionary from './media/dictionary.png';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div>
      <main>
        <img src={dictionary} alt="dictionary" className="header" />
        <SearchEngine />
      </main>
      <footer>
        <a href="https://github.com/bridgetbidigare/dictionary-project"
          target="_blank"
          rel="noopener noreferrer">coded</a> by bridget bidigare <a href="https://www.linkedin.com/in/bridget-bidigare/"
          target="_blank"
          rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </footer>
    </div>
  );
}

export default App;
