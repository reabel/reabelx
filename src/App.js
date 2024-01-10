import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Name">
          Ryan Reabel
        </div>
        <div className="Title">
          Full Stack Developer
        </div>
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
        <br />
        Copyright 2024
      </body>
      <footer  className="App-footer">
      </footer>
    </div>
  );
}

export default App;
