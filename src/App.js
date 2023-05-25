import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Reabelx.com
        <br/>
        Ryan Reabel | Full Stack Developer
      </header>
      <body>
        <a href="http://blog.reabelx.com" 
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
         | 
        <a href="https://resume-reabel.vercel.app/" 
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          >
          Resume
        </a>
      </body>
      <footer  className="App-footer">
        Copyright 2023 Reabelx
      </footer>
    </div>
  );
}

export default App;
