import { Home, MessageCircle, Settings } from 'lucide-react';
import '../../styles/Sidebar.scss';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <nav className="sidebar_nav">
        <button title="Início"><Home size={24} /></button>
        <button title="Chat"><MessageCircle size={24} /></button>
        <button className="sidebar_icon settings" title="Configurações"><Settings size={24} /></button>
      </nav>
    </aside>
  );
};

export default Sidebar;