import { useTheme } from '../context/ThemeContext';
import '../../styles/CustomizationPanel.scss';

const CustomizationPanel = () => {
  const { setTheme, setAccentColor, setBotMessageColor } = useTheme();

  return (
    <div className="customization">
      <div className="customization-itens">
            <h3>Change the colors to customize your bot</h3>

        <div className="theme-buttons">
          <button onClick={() => setTheme('light')}>Light</button>
         <button onClick={() => setTheme('dark')}>Dark</button>
        </div>

        <h4>Accent Color</h4>
        <div className="color-options">
          {['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#8a2be2', '#ff6f61', '#00cec9'].map(color => (
            <button
             key={color}
             style={{ backgroundColor: color }}
              onClick={() => setAccentColor(color)}
            />
          ))}
        </div>

        <h4>Bot Message</h4>
        <div className="color-options-bot">
          <button  onClick={() => setBotMessageColor('#e63946')}>Red</button>
         <button  onClick={() => setBotMessageColor('#3498db')}>
           Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;