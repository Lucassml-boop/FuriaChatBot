import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../styles/CustomizationPanel.scss';
import { Sun, Moon } from 'lucide-react';
import { Settings } from 'lucide-react';

const CustomizationPanel = () => {
  const { setTheme, setAccentColor, setBotMessageColor } = useTheme();
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setTheme(theme);
    setActiveTheme(theme);
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`customization ${isOpen ? 'open' : ''}`}>
      
      <div
        className="customization-button"
        onClick={togglePanel}
        title="Abrir painel de personalização"
      >
        <Settings size={19} />
      </div>

      <div className={`customization-itens ${isOpen || window.innerWidth > 768 ? 'open' : ''}`}>
        <h3>Change the colors to customize your bot</h3>

        <div className="theme-buttons">
          <button
            onClick={() => handleThemeChange('light')}
            className={activeTheme === 'light' ? 'active' : ''}
            title="Tema Claro"
          >
            <Sun size={24} />
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={activeTheme === 'dark' ? 'active' : ''}
            title="Tema Escuro"
          >
            <Moon size={24} />
          </button>
        </div>

        <h4>Accent Color</h4>
        <div className="color-options">
          {['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#8a2be2', '#ff6f61', '#00cec9', '#eeeeee'].map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setAccentColor(color)}
            />
          ))}
        </div>

        <h4>Bot Message</h4>
        <div className="color-options">
          {['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#8a2be2', '#ff6f61', '#00cec9', '#eeeeee'].map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setBotMessageColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;