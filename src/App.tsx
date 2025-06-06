import './styles/App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/SideBar/Sidebar';
import CustomizationPanel from './components/CustomPainel/CustomizationPanel';

import logo from './assets/logo.png';

function App() {
  return (
      <div className="app">
        <Sidebar />

        <div className="app_content">
          <header className="app_header">
            <img src={logo} alt="FURIA Logo" className="app_logo" />
          </header>

          <main className="app_main">
            <Chat />
            <CustomizationPanel />
          </main>
        </div>
      </div>
  );
}

export default App;