import React from 'react';

interface ChatOptionsProps {
  onSelect: (option: string) => void;
}

const ChatOptions: React.FC<ChatOptionsProps> = ({ onSelect }) => {
  return (
    <div className="chat_options">
      <p className="chat_bot">
        Escolha uma das opções abaixo:
      </p>
      <ul>
        <li><button onClick={() => onSelect('1')}>1. Jogadores do time</button></li>
        <li><button onClick={() => onSelect('2')}>2. Próximos jogos</button></li>
        <li><button onClick={() => onSelect('3')}>3. Vezes que foi campeão</button></li>
        <li><button onClick={() => onSelect('4')}>4. História</button></li>
        <li><button onClick={() => onSelect('5')}>5. Curiosidades</button></li>
      </ul>
    </div>
  );
};

export default ChatOptions;
