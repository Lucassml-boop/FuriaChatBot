import './styles/App.scss';
import Chat from './components/Chat/Chat';

import logo from './assets/logo.png';


function App() {
  return (
    <div className="app">
      <header className="app_header">
        <img src={logo} alt="FURIA Logo" className="app_logo" />
        <h1>FURIA Conversational Experience</h1>
      </header>

      <main className="app_main">
        <Chat />
      </main>

      <footer className="app_footer">
        <p>Made with ❤️ for FURIA fan</p>
      </footer>
    </div>
  );
}

export default App;
